(ns tbvs.devcards.core
  (:require
   [reagent.core :as reagent]
   [tbvs.pixi.core :as pixi]
   [tbvs.game.creator :as game-creator]
   [tbvs.engine.core :as engine]
   [tbvs.game.core :as game]
   [sablono.core :as sab :include-macros true])
  (:require-macros
   [devcards.core :as dc :refer [defcard defcard-rg deftest]]))

(enable-console-print!)

(defn canvas []
             [:canvas {:width "400px"
                       :height "400px"
                       :style {:background-color "blue"}}])

(defn animate [renderer stage bunny msg]
  #_(println renderer stage bunny msg)
  (pixi/render renderer stage)
  (js/requestAnimationFrame #(animate renderer stage bunny msg)))

(defcard-rg tests
    "some docs"
     (with-meta
      canvas
      {:component-did-mount
        (fn [this]
          (let [game (-> {:props {:width 400 :height 400}
                          :entities {:player {:x 200 :y 340 :on :air
                                              :type :player
                                              :components [[:renderable]]}}
                          :test true
                          :state-bag {:pixi-renderer {:dom-node (reagent/dom-node this)}}
                          :system [:pixi-renderer]}
                         (game-creator/create)
                         (game/start))

                renderer (get-in game [:state-bag :pixi-renderer :renderer])
                stage (get-in game [:state-bag :pixi-renderer :stage])

                ]
            (js/requestAnimationFrame #(animate renderer stage nil "anim 2"))
            ))}))


(defn main []
  ;; conditionally start the app based on whether the #main-app-area
  ;; node is on the page
  (if-let [node (.getElementById js/document "main-app-area")]
    (js/React.render (sab/html [:div "This is working"]) node)))

(main)
