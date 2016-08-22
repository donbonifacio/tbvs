(ns tbvs.game.core
  "Generic game handling utils"
  (:require [tbvs.engine.protocols.game-system :as gs]))

(defn start
  "Starts a new game"
  [game]
  (->> game
       (gs/start (get-in game [:state-bag :pixi-renderer :handler]))
       ((:game-loop-fn game))))

(defn next-state
  "Advances the game to the next state"
  [game]
  (gs/process (get-in game [:state-bag :pixi-renderer :handler]) game))
