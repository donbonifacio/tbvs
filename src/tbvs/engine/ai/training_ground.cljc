(ns tbvs.engine.ai.training-ground
  "Controlls the training ground"
  (:require [tbvs.engine.protocols.game-entity :as ge]))

(deftype TrainingGroundEntity []
  ge/GameEntity

  (start [this game entity]
    game)

  (process [this game entity]
    (let [delta (get-in game [:props :movement-delta])
          delta-inc (* delta 60)
          new-entity (update entity :pos + delta-inc)]
      (assoc-in game [:entities (:id entity)] new-entity))))

(defn create
  "Creates a new trainning ground handler"
  []
  (->TrainingGroundEntity))
