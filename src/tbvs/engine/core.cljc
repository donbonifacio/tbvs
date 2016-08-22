(ns tbvs.engine.core)

{:entities {:world {:components [[:scrolable]
                                 [:renderable {:on :ground
                                               :custom :playground}]]}
            :player {:state {:x 1 :y 2}
                     :components [[:movable]
                                  [:renderable {:on :air
                                                :asset "player"}]
                                  [:shooter]
                                  [:animatable]
                                  [:destroyable]]}}
 :input [[:move :left]]
 :system [:input :ai :move :render]}

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
