(ns tbvs.engine.ai.training-ground
  "Controlls the training ground"
  (:require [tbvs.engine.protocols.game-entity :as ge]
            ))

(deftype TrainingGroundEntity []
  ge/GameEntity

  (start [this game entity]
    game)

  (process [this game entity]
    #_(prn (:id entity) entity (:game-id game))
    game))

(defn create
  "Creates a new trainning ground handler"
  []
  (->TrainingGroundEntity))
