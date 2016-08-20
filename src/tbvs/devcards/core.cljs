(ns tbvs.devcards.core
  (:require
   [reagent.core :as reagent]
   [sablono.core :as sab :include-macros true])
  (:require-macros
   [devcards.core :as dc :refer [defcard defcard-rg deftest]]))

(enable-console-print!)


(defn canvas []
             [:canvas {:width "400px"
                       :height "400px"
                       :style {:background-color "blue"}}])

(defn animate [renderer stage bunny]
  (.render renderer stage)
  (set! (-> bunny .-rotation) (+ 0.02 (-> bunny .-rotation)))
  (js/requestAnimationFrame #(animate renderer stage bunny)
                            )
  )

(defcard-rg rg-example-2
    "some docs"
     (with-meta
      canvas
      {:component-did-mount
        (fn [this]
          (let [dom-node (reagent/dom-node this)
                options #js {:view dom-node}
                renderer (js/PIXI.autoDetectRenderer 400 400 options)
                stage (new js/PIXI.Container)
                texture (PIXI.Texture.fromImage "bunny.png")
                bunny (new PIXI.Sprite texture)
                ]
            (set! (-> bunny .-position .-x) 100)
            (set! (-> bunny .-position .-y) 100)
            (set! (-> bunny .-anchor .-x) 0.5)
            (set! (-> bunny .-anchor .-y) 0.5)

            (println dom-node)
            #_(println "MOUNTED BIAATCH")
            (.addChild stage bunny)

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

