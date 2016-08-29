(ns tbvs.engine.ai.enemy
  "Controlls a basic enemy"
  (:require [tbvs.engine.protocols.game-entity :as ge]))

(deftype EnemyEntity []
  ge/GameEntity

  (start [this game entity]
    game)

  (process [this game entity]
    (let [delta (get-in game [:props :movement-delta])
          delta-inc (* delta 60)
          new-entity (update entity :y + delta-inc)]
      (assoc-in game [:entities (:id entity)] new-entity))))

(defn create
  "Creates a new enemy handler"
  []
  (->EnemyEntity))
