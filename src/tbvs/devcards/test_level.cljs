(ns tbvs.devcards.test-level
  (:require
   [reagent.core :as reagent]
   [tbvs.pixi.core :as pixi]
   [tbvs.engine.templates :as templates]
   [devcards.core :as dc]
   [tbvs.game.creator :as game-creator]
   [tbvs.engine.core :as engine]
   [tbvs.game.core :as game]
   [tbvs.devcards.helper :as helper]
   [tbvs.engine.protocols.game-system :as gs]
   [sablono.core :as sab :include-macros true])
  (:require-macros
   [devcards.core :as dc :refer [defcard defcard-rg deftest]]))

(defcard-rg test-level
   (helper/game-card
     {:props {:width 800 :height 600 :test false}
      :entities {:ground (templates/training-ground)
                 :player (templates/player {:x 400 :y 540})}
      :game-loop :pixi-game-loop
      :system [:pixi-delta
               (helper/enemy-rain-spawner)
               :player
               :ai
               :turn-state-machine
               :pixi-renderer]}
     {:stats true
      :controls :keyboard}))
