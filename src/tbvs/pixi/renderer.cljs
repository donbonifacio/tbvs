(ns tbvs.pixi.renderer
  "Implementation of a rendering game system in pixi"
  (:require [tbvs.engine.protocols.game-system :as gs]
            [tbvs.engine.core :as engine]
            [tbvs.pixi.entities :as entities]
            [tbvs.pixi.core :as pixi]))

(defn register-entities
  "Registers the game entities for the renderer to display"
  [game stage]
  (reduce (fn [game entity]
            (let [entity-renderer (entities/entity-renderer entity)]
              (entities/create-entity entity-renderer game entity)))
          game
          (engine/entities-with-component game :renderable)))

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
    (pixi/render (get-in game [:state-bag :pixi-renderer :renderer])
                 (get-in game [:state-bag :pixi-renderer :stage]))
    game))

(defn create
  "Creates a new PixiRenderer"
  []
  (->PixiRenderer))
