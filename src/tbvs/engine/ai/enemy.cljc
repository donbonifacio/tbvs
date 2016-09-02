(ns tbvs.engine.ai.enemy
  "Controlls a basic enemy"
  (:require [tbvs.engine.protocols.game-entity :as ge]
            [tbvs.game.core :as game]
            [tbvs.engine.templates :as templates]))

(deftype EnemyEntity []
  ge/GameEntity

  (start [this game entity]
    game)

  (process [this game entity]
    (let [delta (get-in game [:props :movement-delta])
          delta-inc (* delta 60)
          new-entity (-> entity
                         (update :fire-delay + delta)
                         (update :y + delta-inc))]
      (cond
        (> (:y entity) (+ (get-in game [:props :height]) 100))
          (game/remove-entity game entity)

        (> (:fire-delay entity) 2)
          (let [new-entity (assoc new-entity :fire-delay 0)]
            (-> game
                (game/register-entity (templates/projectile {:x (:x entity)
                                                             :y (+ 20 (:y entity))
                                                             :rotation_ 1.5}))
                (assoc-in  [:entities (:id entity)] new-entity)))

        :else
          (assoc-in game [:entities (:id entity)] new-entity)))))

(defn create
  "Creates a new enemy handler"
  []
  (->EnemyEntity))
