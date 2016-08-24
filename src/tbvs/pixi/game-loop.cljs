(ns tbvs.pixi.game-loop
  "Implements a game loop with js/requestAnimationFrame"
  (:require [tbvs.engine.protocols.game-loop :as gl]
            [tbvs.game.core :as game]
            [tbvs.pixi.core :as pixi]))

(def running-games (atom {}))

(defn process [game]
  (let [running-games @running-games]
    (if (get running-games (:game-id game))
      (let [new-game (game/next-state game)]
        (js/requestAnimationFrame #(process new-game))
        new-game)
      (println "[PixiGameLoop] Next game loop bailed" (:game-id game)))))

(deftype PixiGameLoop []
  gl/GameLoop

  (start [this game]
    (swap! running-games assoc (:game-id game) game)
    (println "[PixiGameLoop] Start" (:game-id game))
    (process game))

  (stop [this game]
    (swap! running-games dissoc (:game-id game))
    (println "[PixiGameLoop] Stop" (:game-id game))
    game))

(defn create
  "Creates a new pixi game loop"
  []
  (->PixiGameLoop))
