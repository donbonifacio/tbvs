(ns tbvs.game.core
  "Generic game handling utils"
  (:require [tbvs.engine.protocols.game-system :as gs]))

(defn start
  "Starts a new game"
  [game]
  (gs/start (get-in game [:state-bag :pixi-renderer :handler]) game))
