(ns tbvs.engine.protocols.game-loop
  "Game loop implementation")

(defprotocol GameLoop
  (start [this game] "Starts the game loop for the given game")
  (register-event [this game event] "Registers the given event")
  (stop [this game] "Stops the game loop for the given game"))
