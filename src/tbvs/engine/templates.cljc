(ns tbvs.engine.templates
  "Entity data/config templates"
  (:require [tbvs.engine.protocols.game-entity :as ge]))

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
