(ns tbvs.engine.protocols.game-system
  "Represents actions a system can perform on a game")

(defprotocol GameSystem
  (start [this game] "Setups the game system")
  (process [this game] "Advances the game to the next state"))

(defn game-system?
  "True if the given arg is a GameSystem"
  [obj]
  (satisfies? GameSystem obj))
