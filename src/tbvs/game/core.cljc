(ns tbvs.game.core
  "Generic game handling utils"
  (:require [tbvs.engine.protocols.game-system :as gs]))

(defn start-system
  "Inits a given system"
  [game system-key]
  (if-let [handler (get-in game [:state-bag system-key :handler])]
    (gs/start handler game)
    game))

(defn start
  "Starts a new game"
  [game]
  (->> (:system game)
       (reduce start-system game)
       ((:game-loop-fn game))))

(defn process-system
  "Processes a given system"
  [game system-key]
  (if-let [handler (get-in game [:state-bag system-key :handler])]
    (gs/process handler game)
    game))

(defn next-state
  "Advances the game to the next state"
  [game]
  (reduce process-system game (:system game)))
