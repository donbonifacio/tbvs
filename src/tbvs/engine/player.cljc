(ns tbvs.engine.player
  "Player controller"
  (:require [tbvs.engine.protocols.game-system :as gs]
            [tbvs.engine.protocols.game-entity :as ge]
            [tbvs.engine.core :as engine]
            [tbvs.game.core :as game]
            [tbvs.engine.templates :as templates]
            [tbvs.engine.ai.training-ground :as training-ground]))

(defn fire
  "Fires a projectile"
  [game event]
  (let [player (engine/entity-by-id game :player)]
    (-> game
        (game/register-entity (templates/projectile {:x (- (:x player) 47)
                                                     :y (:y player)
                                                     :rotation 3
                                                     :dir -1}))
        (game/register-entity (templates/projectile {:x (+ (:x player) 47)
                                                     :y (:y player)
                                                     :rotation 3
                                                     :dir -1}))
        (update-in [:events] conj {:type :advance-turn}))))

(defn direction->vector
  "Gets the direction as a vector"
  [event]
  (condp = (:go event)
    :up [0 -1]
    :down [0 1]
    :left [-1 0]
    :right [1 0]))

(defn set-player-direction
  "Sets the moving vector for a player"
  [game event]
  (let [entity-id (:entity event)
        player (engine/entity-by-id game entity-id)]
    (assert player)
    (-> game
        (update-in [:entities entity-id] assoc :dir (direction->vector event))
        (update-in [:events] conj {:type :advance-turn}))))

(defn move-players
  "Moves all players"
  [game]
  (let [player (engine/entity-by-id game :player)
        [dir-x dir-y] (:dir player)
        delta (get-in game [:props :movement-delta])
        delta-inc (* delta 200)]
    (-> game
        (update-in [:entities :player :x] + (* dir-x delta-inc))
        (update-in [:entities :player :y] + (* dir-y delta-inc)))))

(defrecord PlayerSystem []
  gs/GameSystem

  (start [this game]
    game)

  (process [this game]
    (let [state (get-in game [:props :state])
          event (first (filter (fn [event] (= :player (:entity event))) (:events game)))]
      (cond
        (:go event) (set-player-direction game event)
        (:fire-type event) (fire game  event)
        (= :moving state) (move-players game)
        :else game))))

(defn create
  "Creates a new PlayerSystem"
  []
  (->PlayerSystem))
