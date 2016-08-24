(ns tbvs.game.creator
  "Creates and setups a new game"
  (:require [tbvs.pixi.renderer :as pixi-renderer]
            [tbvs.pixi.game-loop :as pixi-game-loop]
            [tbvs.engine.ai :as ai]))

(defn add-id-to-entities
  "Registers the entities with ids"
  [game]
  (let [entities (:entities game)]
    (reduce-kv (fn [game entity-id entity]
                 (assoc-in game [:entities entity-id] (assoc entity :id entity-id)))
               game
               entities)))

(defn create
  "Creates and setups a new game"
  [game]
  (-> game
      (assoc :game-id (gensym "game"))
      (add-id-to-entities)
      (assoc-in [:game-loop] (pixi-game-loop/create))
      (assoc-in [:state-bag :pixi-renderer :handler] (pixi-renderer/create))
      (assoc-in [:state-bag :ai :handler] (ai/create))))
