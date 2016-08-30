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
     {:props {:width 800 :height 400 :test true}
              :entities {:ground {:on :ground
                                  :type :training-ground
                                  :components [[:renderable]
                                               [:ai]]}}
              :state :moving
              :game-loop :pixi-game-loop
              :system [:pixi-delta
                       (reify gs/GameSystem
                         (start [this game]
                           game)
                         (process [this game]
                           (let [span (get-in game [:state-bag :custom :span])
                                 index (mod (get-in game [:state-bag :custom :index]) 8)
                                 delta (get-in game [:props :movement-delta])
                                 new-span (+ span delta)]
                             (if (> new-span 0.5)
                               (-> game
                                   (game/register-entity {:on :air
                                                          :x (+ 50 (* index 100)) :y -50
                                                          :type :enemy
                                                          :components [[:renderable]
                                                                       [:ai]]})
                                   (assoc-in [:state-bag :custom :index] (inc index))
                                   (assoc-in [:state-bag :custom :span] 0))
                               (assoc-in game [:state-bag :custom :span] new-span)))))
                       :ai
                       :pixi-renderer]}))
