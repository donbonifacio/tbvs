(ns tbvs.engine.player
  "Player controller"
  (:require [tbvs.engine.protocols.game-system :as gs]
            [tbvs.engine.protocols.game-entity :as ge]
            [tbvs.engine.core :as engine]
            [tbvs.engine.ai.training-ground :as training-ground]))

(defn set-player-direction
  "Sets the moving vector for a player"
  [game event]
  game
  )

(defrecord PlayerSystem []
  gs/GameSystem

  (start [this game]
    game)

  (process [this game]
    (let [state (get-in game [:props :state])
          go-event (first (filter :go (:events game)))]
      (cond
        (some? go-event) (set-player-direction game go-event)
        :else game))))

(defn create
  "Creates a new PlayerSystem"
  []
  (->PlayerSystem))
