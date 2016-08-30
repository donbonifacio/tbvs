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
  "Basic enemy"
   (helper/game-card
     {:props {:width 800 :height 400 :test true}
              :entities {:ground {:on :ground
                                  :type :training-ground
                                  :components [[:renderable]
                                               [:ai]]}
                         :enemy-2 {:on :air
                                   :x 200 :y 0
                                   :type :enemy
                                   :components [[:renderable]
                                                [:ai]]}
                         }
              :state :moving
              :game-loop :pixi-game-loop
              :system [:pixi-delta
                       (reify gs/GameSystem
                         (start [this game]
                           game)
                         (process [this game]
                           game))
                       :ai
                       :pixi-renderer]}))
