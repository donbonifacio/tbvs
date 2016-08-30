(ns tbvs.devcards.player-control
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

(defcard-rg player-control
  "#### Flow
   * Game is stopped waiting for input (with `:movement-delta 0` and
     `:state :waiting`)
   * Some input happens, and an event is created
     (eg `{:type :input :entity :player :go :right}`);
     The `{:type :turn}` event may also be sent at this point
   * The player handler will watch for the `:go` event, and if present will
     create a movement vector for the player (eg `[0 y-speed]`). This will
     only happen if `:state :waiting`
   * When an event `{:type :turn}` is available
     `:movement-delta` is set to `:delta`, making the world move, and 
     `:state` changes to `:running`
   * The world will move for a given set of time. After the turn time elapsed,
     the game is paused for input again, setting `:movement-delta 0` and 
     `:state waiting` and will wait for input
  
    ### How about several players?
  
    * With several players, the flow will be the same. However, the `{:type :turn}`
      event will only be sent when all the players have issued an input
    * The `:go` event already have a `:entity` id, this means that several controls
      can map to different players or even other entity types (like controllable missiles)"
   (helper/game-card
     {:props {:width 800 :height 400 :test true}
              :entities {:ground {:on :ground
                                  :type :training-ground
                                  :components [[:renderable]
                                               [:ai]]}
                         :player {:x 400 :y 340 :on :air
                                  :type :player
                                  :components [[:player]
                                               [:renderable]]}}
              :state :moving
              :events [{:type :input :entity :player :go :right}]
              :game-loop :pixi-game-loop
              :system [:pixi-delta
                       :player
                       :ai
                       :turn-state-machine
                       :pixi-renderer]}
     {:controls :keyboard
      :stats true}))
