(ns tbvs.devcards.helper
  (:require
   [reagent.core :as reagent]
   [tbvs.pixi.core :as pixi]
   [tbvs.game.creator :as game-creator]
   [tbvs.engine.core :as engine]
   [tbvs.game.core :as game]
   [sablono.core :as sab :include-macros true])
  (:require-macros
   [devcards.core :as dc :refer [defcard defcard-rg deftest]]))

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

