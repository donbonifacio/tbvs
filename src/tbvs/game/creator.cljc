(ns tbvs.game.creator
  "Creates and setups a new game"
  (:require [tbvs.pixi.renderer :as pixi-renderer]))

(defn create
  "Creates and setups a new game"
  [game]
  (-> game
      (assoc-in [:state-bag :pixi-renderer :handler] (pixi-renderer/create))))
