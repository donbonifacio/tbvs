(ns tbvs.engine.turn-state-machine
  "Changes turns states"
  (:require [tbvs.engine.protocols.game-system :as gs]
            [tbvs.engine.protocols.game-entity :as ge]
            [tbvs.engine.core :as engine]
            [tbvs.engine.ai.training-ground :as training-ground]))

(defn wait-for-input
  "Sets the game in a state for input"
  [game]
  (-> game
      (assoc-in [:props :movement-delta] 0)
      (assoc-in [:props :movement-delta-counter] 0)
      (assoc-in [:props :state] :waiting)))

(defn move-world
  "Moves the world"
  [game delta movement-delta-counter]
  (-> game
      (assoc-in [:props :movement-delta-counter] (+ delta movement-delta-counter))
      (assoc-in [:props :movement-delta] delta)))

(defn move-delta
  "Moves the world delta"
  [game]
  (let [delta (get-in game [:props :delta])
        movement-delta-counter (or (get-in game [:props :movement-delta-counter]) 0)]
    (if (> movement-delta-counter 0.3)
      (wait-for-input game)
      (move-world game delta movement-delta-counter))))

(defrecord TurnStateMachineSystem []
  gs/GameSystem

  (start [this game]
    game)

  (process [this game]
    (let [events (:events game)
          state (get-in game [:props :state])
          turn-event (first (filter #(= (:type %) :advance-turn) events))]
      (cond
        turn-event
          (-> game
              (assoc-in [:props :state] :moving))

        (= :moving state)
          (move-delta game)

        :else
          game))))

(defn create
  "Creates a new TurnStateMachineSystem"
  []
  (->TurnStateMachineSystem))
