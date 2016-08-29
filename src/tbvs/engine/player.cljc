(ns tbvs.engine.player
  "Player controller"
  (:require [tbvs.engine.protocols.game-system :as gs]
            [tbvs.engine.protocols.game-entity :as ge]
            [tbvs.engine.core :as engine]
            [tbvs.engine.ai.training-ground :as training-ground]))

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
        [dir-x dir-y] (:dir player)]
    (-> game
        (update-in [:entities :player :x] + dir-x)
        (update-in [:entities :player :y] + dir-y))))

(defrecord PlayerSystem []
  gs/GameSystem

  (start [this game]
    game)

  (process [this game]
    (let [state (get-in game [:props :state])
          go-event (first (filter :go (:events game)))]
      (cond
        (some? go-event) (set-player-direction game go-event)
        (= :moving state) (move-players game)
        :else game))))

(defn create
  "Creates a new PlayerSystem"
  []
  (->PlayerSystem))
