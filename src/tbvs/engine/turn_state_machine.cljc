(ns tbvs.engine.turn-state-machine
  "Changes turns states"
  (:require [tbvs.engine.protocols.game-system :as gs]
            [tbvs.engine.protocols.game-entity :as ge]
            [tbvs.engine.core :as engine]
            [tbvs.engine.ai.training-ground :as training-ground]))

(defrecord TurnStateMachineSystem []
  gs/GameSystem

  (start [this game]
    game)

  (process [this game]
    (let [events (:events game)
          turn-event (first (filter #(= (:type %) :advance-turn) events))]
      (if turn-event
        (-> game
            (assoc :events [])
            (assoc-in [:props :state] :moving))
        game))))

(defn create
  "Creates a new TurnStateMachineSystem"
  []
  (->TurnStateMachineSystem))
