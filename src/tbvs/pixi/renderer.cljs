(ns tbvs.pixi.renderer
  "Implementation of a rendering game system in pixi"
  (:require [tbvs.engine.protocols.game-system :as gs]
            [tbvs.engine.core :as engine]
            [tbvs.pixi.entities :as entities]
            [tbvs.pixi.core :as pixi]))

(defn register-entity
  "Registers a specific entity on the renderer"
  [game entity]
  (let [entity-renderer (entities/entity-renderer entity)]
    (entities/create-entity entity-renderer game entity)))

(defn remove-entity
  "Removes a specific entity on the renderer"
  [game entity]
  (let [entity-renderer (entities/entity-renderer entity)]
    (entities/remove-entity entity-renderer game entity)))

(defn register-entities
  "Registers the game entities for the renderer to display"
  [game stage]
  (reduce register-entity
          game
          (engine/entities-with-component game :renderable)))

(defn update-entities
  "Updated the game entities for the renderer to display"
  [game]
  (reduce (fn [game entity]
            (let [entity-renderer (entities/entity-renderer entity)]
              (entities/update-entity entity-renderer game entity)))
          game
          (engine/entities-with-component game :renderable)))

(defn handle-events
  "Handles events on the bus that relates to the renderer"
  [game]
  (reduce (fn [game event]
            (cond
              (= :add-entity (:type event))
                (register-entity game (:entity event))
              (= :remove-entity (:type event))
                (remove-entity game (:entity event))
              :else
                game))
          game
          (:events game)))

(defrecord PixiRenderer []
  gs/GameSystem

  (start [this game]
    (let [dom-node (get-in game [:state-bag :pixi-renderer :dom-node])
          options {:view dom-node :test (-> game :props :test)}
          width (get-in game [:props :width])
          height (get-in game [:props :height])
          renderer (pixi/create-renderer width height options)
          stage (pixi/create-stage)]
      (-> game
          (assoc-in [:state-bag :pixi-renderer :renderer] renderer)
          (assoc-in [:state-bag :pixi-renderer :stage] stage)
          (register-entities stage))))

  (process [this game]
    (let [game (-> game
                   (handle-events)
                   (update-entities))]
      (pixi/render (get-in game [:state-bag :pixi-renderer :renderer])
                   (get-in game [:state-bag :pixi-renderer :stage]))
      game)))

(defn create
  "Creates a new PixiRenderer"
  []
  (->PixiRenderer))
