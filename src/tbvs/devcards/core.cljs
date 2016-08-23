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

(defn canvas [game]
             [:canvas {:width (str (-> game :props :width) "px")
                       :height (str (-> game :props :height) "px")
                       :style {}}])

(defn game-card
  "Creates a game to be wrapped on a card"
  [game]
  (with-meta
      canvas
      {:component-did-mount
        (fn [this]
          (let [game (-> game
                         (assoc :state-bag {:pixi-renderer {:dom-node (reagent/dom-node this)}})
                         (game-creator/create)
                         (game/start))]))}))

(defcard-rg playground
    "Game building playground"
     (game-card {:props {:width 400 :height 400 :test true}
                 :entities {:ground {:on :ground
                                     :type :training-ground
                                     :components [[:renderable]]}
                            :player {:x 200 :y 340 :on :air
                                     :type :player
                                     :components [[:renderable]]}}
                 :game-loop :pixi-game-loop
                 :system [:pixi-renderer]}))

(defn main []
  ;; conditionally start the app based on whether the #main-app-area
  ;; node is on the page
  (if-let [node (.getElementById js/document "main-app-area")]
    (js/React.render (sab/html [:div "This is working"]) node)))

(main)
