(ns tbvs.engine.ai
  "AI game system"
  (:require [tbvs.engine.protocols.game-system :as gs]
            [tbvs.engine.core :as engine]))

(defrecord AiSystem []
  gs/GameSystem

  (start [this game]
    game)

  (process [this game]
    game))

(defn create
  "Creates a new AiSystem"
  []
  (->AiSystem))
