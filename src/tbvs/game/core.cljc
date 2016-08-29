(ns tbvs.game.core
  "Generic game handling utils"
  (:require [tbvs.engine.protocols.game-system :as gs]
            [tbvs.engine.protocols.game-loop :as gl]))

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
       (gl/start (:game-loop game))))

(defn stop
  "Stops the given game"
  [game]
  (gl/stop (:game-loop game) game))

(defn register-event
  "Registers an event on the game"
  [game event]
  (gl/register-event (:game-loop game) game event))

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
