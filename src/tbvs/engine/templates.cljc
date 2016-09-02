(ns tbvs.engine.templates
  "Entity data/config templates"
  (:require [tbvs.engine.protocols.game-entity :as ge]))

(defn player
  "Creates a player"
  ([args]
   (merge
     {:x 400 :y 540 :on :air
      :type :player
      :components [[:player]
                   [:renderable]]}
     args)))

(defn projectile
  "Creates a projectile"
  ([]
   (projectile nil))
  ([args]
   (merge {:type :projectile
           :display "Haducan"
           :on :air
           :components [[:renderable] [:ai]]}
          args)))

(defn training-ground
  "Creates a training ground"
  []
  {:on :ground
   :type :training-ground
   :components [[:renderable]
                [:ai]]})
