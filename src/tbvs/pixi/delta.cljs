(ns tbvs.pixi.delta
  "Time management and delta calculation"
  (:require [tbvs.engine.protocols.game-system :as gs]
            [tbvs.engine.core :as engine]))

(defn now
  "Gets the now time"
  []
  (js/Date.now))

(defrecord PixiDelta []
  gs/GameSystem

  (start [this game]
    (assoc-in game [:state-bag :pixi-delta :then] (now)))

  (process [this game]
    (let [then (get-in game [:state-bag :pixi-delta :then])
          state (get-in game [:props :state])
          now (now)
          delta (/ (- now then) 1000)
          movement-delta (if (= :moving state) delta 0)]
      (-> game
          (assoc-in [:props :delta] delta)
          (assoc-in [:props :movement-delta] movement-delta)
          (assoc-in [:state-bag :pixi-delta :then] now)))))

(defn create
  "Creates a new PixiDelta"
  []
  (->PixiDelta))
