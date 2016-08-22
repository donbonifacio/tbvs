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
          (let [game (-> {:props {:width 400 :height 400 :test true}
                          :entities {:player {:x 200 :y 340 :on :air
                                              :type :player
                                              :components [[:renderable]]}}
                          :state-bag {:pixi-renderer {:dom-node (reagent/dom-node this)}}
                          :game-loop :pixi-game-loop
                          :system [:pixi-renderer]}
                         (game-creator/create)
                         (game/start))]))}))


(defn main []
  ;; conditionally start the app based on whether the #main-app-area
  ;; node is on the page
  (if-let [node (.getElementById js/document "main-app-area")]
    (js/React.render (sab/html [:div "This is working"]) node)))

(main)
