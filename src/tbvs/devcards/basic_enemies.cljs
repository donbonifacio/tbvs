(ns tbvs.devcards.basic-enemies
  (:require
   [reagent.core :as reagent]
   [tbvs.pixi.core :as pixi]
   [devcards.core :as dc]
   [tbvs.game.creator :as game-creator]
   [tbvs.engine.core :as engine]
   [tbvs.game.core :as game]
   [tbvs.devcards.helper :as helper]
   [tbvs.engine.protocols.game-system :as gs]
   [sablono.core :as sab :include-macros true])
  (:require-macros
   [devcards.core :as dc :refer [defcard defcard-rg deftest]]))

(defcard-rg basic-enemy
  "Basic enemies showing up"
   (helper/game-card
     {:props {:width 800 :height 600 :test false :state :moving}
              :entities {:ground {:on :ground
                                  :type :training-ground
                                  :components [[:renderable]
                                               [:ai]]}}
              :state :moving
              :game-loop :pixi-game-loop
              :system [:pixi-delta
                       (helper/enemy-rain-spawner)
                       :ai
                       (helper/set-state :moving)
                       :pixi-renderer]}
     {:stats true}))
