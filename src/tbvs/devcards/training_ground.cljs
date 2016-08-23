(ns tbvs.devcards.training-ground
  (:require
   [reagent.core :as reagent]
   [tbvs.pixi.core :as pixi]
   [devcards.core :as dc]
   [tbvs.game.creator :as game-creator]
   [tbvs.engine.core :as engine]
   [tbvs.game.core :as game]
   [tbvs.devcards.helper :as helper]
   [sablono.core :as sab :include-macros true])
  (:require-macros
   [devcards.core :as dc :refer [defcard defcard-rg deftest]]))

(defcard-rg static-playground
  "Game building playground"
   (helper/game-card
     {:props {:width 400 :height 400 :test true}
              :entities {:ground {:on :ground
                                  :type :training-ground
                                  :components [[:renderable]]}
                         :player {:x 200 :y 340 :on :air
                                  :type :player
                                  :components [[:renderable]]}}
              :game-loop :pixi-game-loop
              :system [:pixi-renderer]}))

(defcard-rg moving-background
  "Background is now moving"
   (helper/game-card
     {:props {:width 400 :height 400 :test true}
              :entities {:ground {:on :ground
                                  :type :training-ground
                                  :components [[:renderable]
                                               [:ai]]}
                         :player {:x 200 :y 340 :on :air
                                  :type :player
                                  :components [[:renderable]]}}
              :game-loop :pixi-game-loop
              :system [:ai :pixi-renderer]}))
