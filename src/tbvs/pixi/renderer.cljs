(ns tbvs.pixi.renderer
  "Implementation of a rendering game system in pixi"
  (:require [tbvs.engine.protocols.game-system :as gs]
            [tbvs.engine.core :as engine]
            [tbvs.pixi.core :as pixi]))

(defn register-entities
  "Registers the game entities for the renderer to display"
  [game stage]
  (when-let [entities (engine/entities-with-component game :renderable)]
    (doseq [entity entities]
      (let [texture (pixi/texture-from-image "img/Player.png")
            sprite (pixi/create-sprite texture)]
        (when-let [rotation (:rotation entity)]
          (pixi/set-rotation sprite rotation))
        (pixi/set-pos sprite (:x entity) (:y entity))
        (pixi/set-scale sprite 0.8 0.8)
        (pixi/set-anchor sprite 0.5 0.5)
        (pixi/register-sprite stage sprite))))
  game)

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
          (register-entities stage)
          (assoc-in [:state-bag :pixi-renderer :renderer] renderer)
          (assoc-in [:state-bag :pixi-renderer :stage] stage))))

  (process [this game]
    (pixi/render (get-in game [:state-bag :pixi-renderer :renderer])
                 (get-in game [:state-bag :pixi-renderer :stage]))
    game))

(defn create
  "Creates a new PixiRenderer"
  []
  (->PixiRenderer))
