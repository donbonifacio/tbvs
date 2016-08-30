(ns tbvs.game.creator
  "Creates and setups a new game"
  (:require [tbvs.pixi.renderer :as pixi-renderer]
            [tbvs.pixi.game-loop :as pixi-game-loop]
            [tbvs.pixi.delta :as pixi-delta]
            [tbvs.engine.player :as player]
            [tbvs.engine.turn-state-machine :as turn-state-machine]
            [tbvs.engine.ai :as ai]))

(defn add-id-to-entities
  "Registers the entities with ids"
  [game]
  (let [entities (:entities game)]
    (reduce-kv (fn [game entity-id entity]
                 (assoc-in game [:entities entity-id] (assoc entity :id entity-id)))
               game
               entities)))

(defn system-handler
  "Returns a system handler for a system key"
  [system-key]
  (condp = system-key
    :pixi-delta pixi-delta/create
    :pixi-renderer pixi-renderer/create
    :turn-state-machine turn-state-machine/create
    :player player/create
    :ai ai/create))

(defn add-systems
  "Adds the registered systems to the game"
  [game]
  (reduce (fn [game system-key]
            (if (keyword? system-key)
              (let [handler-factory (system-handler system-keyword)]
                (assoc-in game [:state-bag system-key :handler] (handler-factory)))
              game))
          game
          (:system game)))

(defn create
  "Creates and setups a new game"
  [game]
  (-> game
      (assoc :game-id (gensym "game"))
      (add-id-to-entities)
      (assoc-in [:props :state] :waiting)
      (assoc-in [:props :delta] 0.0166)
      (assoc-in [:props :movement-delta] 0.0166)
      (assoc-in [:game-loop] (pixi-game-loop/create))
      (add-systems)))
