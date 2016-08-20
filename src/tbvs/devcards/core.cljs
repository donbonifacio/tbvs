(ns tbvs.devcards.core
  (:require
   [reagent.core :as reagent]
   [tbvs.pixi.core :as pixi]
   [sablono.core :as sab :include-macros true])
  (:require-macros
   [devcards.core :as dc :refer [defcard defcard-rg deftest]]))

(enable-console-print!)

(defn canvas []
             [:canvas {:width "400px"
                       :height "400px"
                       :style {:background-color "blue"}}])

(defn animate [renderer stage bunny]
  (pixi/render renderer stage)
  (pixi/rotate bunny 0.1)
  (js/requestAnimationFrame #(animate renderer stage bunny)))

(defcard-rg rg-example-2
    "some docs"
     (with-meta
      canvas
      {:component-did-mount
        (fn [this]
          (let [dom-node (reagent/dom-node this)
                options #js {:view dom-node}
                renderer (pixi/create-renderer 400 400 options)
                stage (pixi/create-stage)
                texture (pixi/texture-from-image "bunny.png")
                bunny (pixi/create-sprite texture)
                ]
            (pixi/set-pos bunny 100 100)
            (pixi/set-anchor bunny 0.5 0.5)
            (pixi/register-sprite stage bunny)

            (js/requestAnimationFrame #(animate renderer stage bunny))
            ))}))


(defn main []
  ;; conditionally start the app based on whether the #main-app-area
  ;; node is on the page
  (if-let [node (.getElementById js/document "main-app-area")]
    (js/React.render (sab/html [:div "This is working"]) node)))

(main)

;; remember to run lein figwheel and then browse to
;; http://localhost:3449/cards.html

