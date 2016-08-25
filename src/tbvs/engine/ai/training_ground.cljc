(ns tbvs.engine.ai.training-ground
  "Controlls the training ground"
  (:require [tbvs.engine.protocols.game-entity :as ge]
            ))

(deftype TrainingGroundEntity []
  ge/GameEntity

  (start [this game entity]
    game)

  (process [this game entity]
    (let [new-entity (update entity :pos inc)]
      (assoc-in game [:entities (:id entity)] new-entity))))

(defn create
  "Creates a new trainning ground handler"
  []
  (->TrainingGroundEntity))
