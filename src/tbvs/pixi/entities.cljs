(ns tbvs.pixi.entities
  "Custom entity rendering"
  (:require [tbvs.engine.protocols.game-system :as gs]
            [tbvs.engine.core :as engine]
            [tbvs.pixi.core :as pixi]))

(defprotocol EntityRenderer
  (create-entity [this game entity] "Creates and registers and entity on the stage")
  (update-entity [this game entity] "Updates entity attributes"))

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
    (pixi/register-sprite stage sprite)
    (assoc-in game [:entities (:id entity) :pixi-display-obj] sprite)))

(defn- update-movable-entity
  "Updates a typical entity that moves"
  [game entity]
  (let [sprite (get-in game [:entities (:id entity) :pixi-display-obj])]
    (when-let [rotation (:rotation entity)]
      (pixi/set-rotation sprite rotation))
    (pixi/set-pos sprite (:x entity) (:y entity))
    (pixi/set-scale sprite 0.8 0.8)
    (pixi/set-anchor sprite 0.5 0.5)
    game))

(deftype PlayerRenderer []
  EntityRenderer
  (create-entity [this game player]
    (create-movable-entity game player {:img "img/Player.png"}))
  (update-entity [this game player]
    (update-movable-entity game player)))

(defn- create-training-wall
  "Creates a wall the size of the display"
  [game entity stage key]
  (let [graphics (-> (new js/PIXI.Graphics)
                       (.beginFill 0xFFFFFF)
                       (.lineStyle 1 0x0000FF))]
      (doall
        (for [x (range 10)
              y (range 10)]
          (.drawRect graphics (+ 0 (* 50 x)) (+ 0 (* 50 y)) 50 50)))
      (pixi/register-sprite stage graphics)
      (assoc-in game [:entities (:id entity) key] graphics)))

(deftype TrainingGroundRenderer []
  EntityRenderer
  (create-entity [this game entity]
    (let [stage (get-in game [:state-bag :pixi-renderer :stage])
          with-wall-1 (create-training-wall game entity stage :pixi-display-obj-1)
          with-wall-2 (create-training-wall with-wall-1 entity stage :pixi-display-obj-2)]
      with-wall-2))

  (update-entity [this game entity]
    (let [pos (mod (:pos entity) 400)
          wall-1 (get-in game [:entities (:id entity) :pixi-display-obj-1])
          wall-2 (get-in game [:entities (:id entity) :pixi-display-obj-2])]
      (pixi/set-pos wall-1 0 pos)
      (pixi/set-pos wall-2 0 (- pos 400)))
    game))

(defn entity-renderer
  "Gets an entity renderer for the given entity"
  [entity]
  (condp = (:type entity)
    :player (->PlayerRenderer)
    :training-ground (->TrainingGroundRenderer)))
