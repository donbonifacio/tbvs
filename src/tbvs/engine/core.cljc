(ns tbvs.engine.core)

(defn entities-with-component
  "Gets the entities that match the given component"
  [game component]
  (when-let [entities (:entities game)]
    (->> (filter (fn [[k entity]]
                   (->> (:components entity)
                        (map first)
                        (some #{component})))
                   entities)
         (map second))))

(defn entity-by-id
  "Gets the entity with the given id"
  [game entity-id]
  (get-in game [:entities entity-id]))
