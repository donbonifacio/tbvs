(ns tbvs.engine.protocols.game-entity
  "Controls entities")

(defprotocol GameEntity
  (start [this game entity] "Setups the entity on the game")
  (process [this game entity] "Processes the entity on the game"))
