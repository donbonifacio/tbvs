(ns tbvs.engine.ai
  "AI game system"
  (:require [tbvs.engine.protocols.game-system :as gs]
            [tbvs.engine.protocols.game-entity :as ge]
            [tbvs.engine.core :as engine]
            [tbvs.engine.ai.enemy :as enemy]
            [tbvs.engine.ai.projectile :as projectile]
            [tbvs.engine.ai.training-ground :as training-ground]))

(defn entity-handler
  "Gets a hander for the given entity"
  [game entity]
  (condp = (:type entity)
    :enemy (enemy/create)
    :projectile (projectile/create)
    :training-ground (training-ground/create)))

(defn process-entity
  "Processes an entity for the given game"
  [game entity]
  (let [handler (entity-handler game entity)]
    (ge/process handler game entity)))

(defn process-entities
  "Processes entities AI"
  [game]
  (reduce process-entity game (engine/entities-with-component game :ai)))

(defrecord AiSystem []
  gs/GameSystem

  (start [this game]
    game)

  (process [this game]
    (process-entities game)))

(defn create
  "Creates a new AiSystem"
  []
  (->AiSystem))
