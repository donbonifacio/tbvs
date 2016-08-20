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
