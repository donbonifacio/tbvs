(ns tbvs.engine.ai.projectile
  "Controlls a basic projectile"
  (:require [tbvs.engine.protocols.game-entity :as ge]
            [tbvs.game.core :as game]))

(deftype ProjectileEntity []
  ge/GameEntity

  (start [this game entity]
    game)

  (process [this game entity]
    (let [delta (get-in game [:props :movement-delta])
          dir (or (:dir entity) 1)
          delta-inc (* delta 200 dir)
          new-entity (update entity :y + delta-inc)]
      (cond
        (> (:y entity) (+ (get-in game [:props :height]) 100))
          (game/remove-entity game entity)
        :else
          (assoc-in game [:entities (:id entity)] new-entity)))))

(defn create
  "Creates a new enemy handler"
  []
  (->ProjectileEntity))
