(ns tbvs.pixi.renderer
  "Implementation of a rendering game system in pixi"
  (:require [tbvs.engine.protocols.game-system :as gs]
            [tbvs.pixi.core :as pixi]))

(defrecord PixiRenderer []
  gs/GameSystem

  (start [this game]
    (let [dom-node (get-in game [:state-bag :pixi-renderer :dom-node])
          options {:view dom-node :test (:test game)}
          width (get-in game [:props :width])
          height (get-in game [:props :height])
          renderer (pixi/create-renderer width height options)
          stage (pixi/create-stage)]
      (-> game
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
