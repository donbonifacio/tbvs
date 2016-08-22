(ns tbvs.pixi.game-loop
  "Implements a game loop with js/requestAnimationFrame"
  (:require [tbvs.engine.protocols.game-system :as gs]
            [tbvs.game.core :as game]
            [tbvs.pixi.core :as pixi]))

(defn process [game]
  (let [new-game (game/next-state game)]
    (js/requestAnimationFrame #(process new-game))
    new-game))
