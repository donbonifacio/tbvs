(ns tbvs.devcards.helper
  (:require
   [reagent.core :as reagent]
   [tbvs.pixi.core :as pixi]
   [tbvs.game.creator :as game-creator]
   [tbvs.engine.core :as engine]
   [tbvs.game.core :as game]
   [tbvs.engine.protocols.game-loop :as gl]
   [sablono.core :as sab :include-macros true])
  (:require-macros
   [devcards.core :as dc :refer [defcard defcard-rg deftest]]))

(defn canvas [game options]
  [:div {:id (:game-id game)}
    [:canvas {:width (str (-> game :props :width) "px")
              :height (str (-> game :props :height) "px")
              :style {}}]
    (when (:controls options)
      [:div
       [:input {:type "button" :value "up"}]
       [:div
         [:input {:type "button" :value "left"}]
         [:input {:type "button" :value "right"}]]
       [:input {:type "button" :value "down"}]])])

(defn game-card
  "Creates a game to be wrapped on a card"
  ([game]
   (game-card game {}))
  ([game options]
   (let [game-id (gensym "canvas-game")
         game (assoc game :game-id game-id)
         game-atom (atom nil)]
     (with-meta
         #(canvas game options)
         {:component-did-mount
           (fn [this]
             (let [dom-node (reagent/dom-node this)
                   canvas-node (-> dom-node .-firstChild)
                   game (-> game
                            (assoc :state-bag {:pixi-renderer {:dom-node canvas-node}})
                            (game-creator/create)
                            (assoc :game-id game-id)
                            (game/start))]
               (reset! game-atom game)))
 
          :component-will-unmount
            (fn [this]
              (game/stop @game-atom))}))))
 
