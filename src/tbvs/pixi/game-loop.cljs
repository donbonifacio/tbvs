(ns tbvs.pixi.game-loop
  "Implements a game loop with js/requestAnimationFrame"
  (:require [tbvs.engine.protocols.game-loop :as gl]
            [tbvs.game.core :as game]
            [tbvs.pixi.core :as pixi]))

(def running-games (atom {}))
(def events (atom {}))

(defn process [game]
  (let [game-id (:game-id game)
        running-games @running-games
        current-events @events]
    (swap! events dissoc game-id)
    (if (get running-games game-id)
      (let [event (get current-events game-id)
            game (if event
                   (assoc game :events [event])
                   (assoc game :events []))
            new-game (game/next-state game)]
        (js/requestAnimationFrame #(process new-game))
        new-game)
      (println "[PixiGameLoop] Next game loop bailed" (:game-id game)))))

(deftype PixiGameLoop []
  gl/GameLoop

  (start [this game]
    (swap! running-games assoc (:game-id game) game)
    (println "[PixiGameLoop] Start" (:game-id game))
    (process game))

  (register-event [this game event]
    (swap! events assoc (:game-id game) event)
    game)

  (stop [this game]
    (swap! running-games dissoc (:game-id game))
    (println "[PixiGameLoop] Stop" (:game-id game))
    game))

(defn create
  "Creates a new pixi game loop"
  []
  (->PixiGameLoop))
