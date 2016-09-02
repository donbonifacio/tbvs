(ns tbvs.devcards.helper
  (:require
   [reagent.core :as reagent]
   [tbvs.pixi.core :as pixi]
   [tbvs.game.creator :as game-creator]
   [tbvs.engine.core :as engine]
   [tbvs.game.core :as game]
   [tbvs.engine.protocols.game-loop :as gl]
   [tbvs.engine.protocols.game-system :as gs]
   [sablono.core :as sab :include-macros true])
  (:require-macros
   [devcards.core :as dc :refer [defcard defcard-rg deftest]]))

(defn go-event
  "Generates a go event"
  [game direction]
  (game/register-event game {:type :input :entity :player :go direction}))

(defn fire-event
  "Generates a fire event"
  [game fire-type]
  (game/register-event game {:type :fire :entity :player :fire-type fire-type}))

(defn game-recorder
  "GameSystem that records a game on a ratom"
  [ratom]
  (reify gs/GameSystem
     (start [this game]
       game)
     (process [this game]
       (reset! ratom game))))

(defn canvas [game-atom ratom options]
  [:div {:id (:game-id @game-atom)}
    [:canvas {:width (str (-> @game-atom :props :width) "px")
              :height (str (-> @game-atom :props :height) "px")
              :style {}}]
    (when (:controls options)
      [:div
       [:input {:type "button" :value "fire-1" :on-click #(fire-event @game-atom :fire-1)}]
       [:br]
       [:input {:type "button" :value "up" :on-click #(go-event @game-atom :up)}]
       [:div
         [:input {:type "button" :value "left" :on-click #(go-event @game-atom :left)}]
         [:input {:type "button" :value "right" :on-click #(go-event @game-atom :right)}]]
       [:input {:type "button" :value "down" :on-click #(go-event @game-atom :down)}]])
    (when (:stats options)
      (let [game @ratom]
        [:ul
         [:li [:b "State "] (-> game :props :state)]
         [:li [:b "Entities: "] (count (:entities game))]]))])

(defn game-card
  "Creates a game to be wrapped on a card"
  ([game]
   (game-card game {}))
  ([game options]
   (let [game-id (gensym "canvas-game")
         ratom (reagent/atom nil)
         game (-> game
                  (assoc :game-id game-id)
                  (update :system conj (game-recorder ratom)))
         game-atom (atom nil)]
     (with-meta
         #(canvas game-atom ratom options)
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

(defn enemy-rain-spawner
  []
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
         (assoc-in game [:state-bag :custom :span] new-span))))))

(defn set-state
  [state]
  (reify gs/GameSystem
   (start [this game]
     game)
   (process [this game]
     (assoc-in game [:props :state] state))))
