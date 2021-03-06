(ns tbvs.pixi.entities
  "Custom entity rendering"
  (:require [tbvs.engine.protocols.game-system :as gs]
            [tbvs.engine.core :as engine]
            [tbvs.pixi.core :as pixi]))

(defprotocol EntityRenderer
  (create-entity [this game entity] "Creates and registers and entity on the stage")
  (update-entity [this game entity] "Updates entity attributes")
  (remove-entity [this game entity] "Removes an entity from the stage"))

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

(defn- remove-entity-from-stage
  "Removes an entity"
  [game entity]
  (pixi/destroy (get-in game [:state-bag :pixi-renderer :stage])
                (:pixi-display-obj entity))
  game)

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
    (update-movable-entity game player))
  (remove-entity [this game player]
    (remove-entity-from-stage game player)))

(deftype EnemyRenderer []
  EntityRenderer
  (create-entity [this game enemy]
    (create-movable-entity game enemy {:img "img/Enemy.png"}))
  (update-entity [this game enemy]
    (update-movable-entity game enemy))
  (remove-entity [this game entity]
    (remove-entity-from-stage game entity)))

(deftype ProjectileRenderer []
  EntityRenderer
  (create-entity [this game projectile]
    (create-movable-entity game projectile {:img (str "img/" (:display projectile) ".png")}))
  (update-entity [this game projectile]
    (update-movable-entity game projectile))
  (remove-entity [this game entity]
    (remove-entity-from-stage game entity)))

(defn- create-training-wall
  "Creates a wall the size of the display"
  [game entity stage key]
  (let [graphics (-> (new js/PIXI.Graphics)
                       (.beginFill 0xFFFFFF)
                       (.lineStyle 1 0xccffff))
        square-size 50
        width (get-in game [:props :width])
        height (get-in game [:props :height])]
      (pixi/set-alpha graphics 1)
      (doall
        (for [x (range (inc (int (/ width square-size))))
              y (range (inc (int (/ height square-size))))]
          (.drawRect graphics (+ 0 (* square-size x)) (+ 0 (* square-size y)) square-size square-size)))
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
    (let [height (get-in game [:props :height])
          pos (mod (:pos entity) height)
          wall-1 (get-in game [:entities (:id entity) :pixi-display-obj-1])
          wall-2 (get-in game [:entities (:id entity) :pixi-display-obj-2])]
      (pixi/set-pos wall-1 0 pos)
      (pixi/set-pos wall-2 0 (- pos height)))
    game)

  (remove-entity [this game entity]
    game))

(defn entity-renderer
  "Gets an entity renderer for the given entity"
  [entity]
  (condp = (:type entity)
    :player (->PlayerRenderer)
    :enemy (->EnemyRenderer)
    :projectile (->ProjectileRenderer)
    :training-ground (->TrainingGroundRenderer)))
