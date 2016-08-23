(ns tbvs.pixi.entities
  "Custom entity rendering"
  (:require [tbvs.engine.protocols.game-system :as gs]
            [tbvs.engine.core :as engine]
            [tbvs.pixi.core :as pixi]))

(defprotocol EntityRenderer
  (create-entity [this game entity]))

(defn- create-movable-entity
  "Creates a typical entity that moves"
  [game entity options]
  (let [texture (pixi/texture-from-image (:img options))
        sprite (pixi/create-sprite texture)
        stage (get-in game [:state-bag :pixi-renderer :stage])]
    (when-let [rotation (:rotation entity)]
      (pixi/set-rotation sprite rotation))
    (pixi/set-pos sprite (:x entity) (:y entity))
    (pixi/set-scale sprite 0.8 0.8)
    (pixi/set-anchor sprite 0.5 0.5)
    (pixi/register-sprite stage sprite)))

(deftype PlayerRenderer []
  EntityRenderer
  (create-entity [this game player]
    (create-movable-entity game player {:img "img/Player.png"})))

(defn entity-renderer
  "Gets an entity renderer for the given entity"
  [entity]
  (condp = (:type entity)
    :player (->PlayerRenderer)))