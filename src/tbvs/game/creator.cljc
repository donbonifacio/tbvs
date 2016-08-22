(ns tbvs.game.creator
  "Creates and setups a new game"
  (:require [tbvs.pixi.renderer :as pixi-renderer]
            [tbvs.pixi.game-loop :as pixi-game-loop]))

(defn create
  "Creates and setups a new game"
  [game]
  (-> game
      (assoc-in [:game-loop-fn] pixi-game-loop/process)
      (assoc-in [:state-bag :pixi-renderer :handler] (pixi-renderer/create))))
