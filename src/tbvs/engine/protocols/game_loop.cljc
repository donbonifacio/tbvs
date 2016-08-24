(ns tbvs.engine.protocols.game-loop
  "Game loop implementation")

(defprotocol GameLoop
  (start [this game] "Starts the game loop for the given game")
  (stop [this game] "Stops the game loop for the given game"))
