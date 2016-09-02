(ns tbvs.game.core
  "Generic game handling utils"
  (:require [tbvs.engine.protocols.game-system :as gs]
            [tbvs.engine.protocols.game-loop :as gl]))

(defn system-handler
  "Returns a system handler"
  [game system-key]
  (cond
    (keyword? system-key)
      (get-in game [:state-bag system-key :handler])

    (gs/game-system? system-key)
      system-key))

(defn start-system
  "Inits a given system"
  [game system-key]
  (if-let [handler (system-handler game system-key)]
    (gs/start handler game)
    game))

(defn start
  "Starts a new game"
  [game]
  (->> (:system game)
       (reduce start-system game)
       (gl/start (:game-loop game))))

(defn stop
  "Stops the given game"
  [game]
  (gl/stop (:game-loop game) game))

(defn register-event
  "Registers an event on the game"
  [game event]
  (gl/register-event (:game-loop game) game event))

(defn process-system
  "Processes a given system"
  [game system-key]
  (if-let [handler (system-handler game system-key)]
    (gs/process handler game)
    game))

(defn next-state
  "Advances the game to the next state"
  [game]
  (reduce process-system
          game
          (:system game)))

(defn setup-entity
  "Prepares the entity to enter the game"
  [entity]
  (cond-> entity
    (nil? (:id entity))
      (assoc :id (gensym (:type entity)))))

(defn register-entity
  "Registers a new entity on the game's flow"
  [game entity]
  (let [entity (setup-entity entity)]
    (-> game
        (update :entities assoc (:id entity) entity)
        (update :events conj {:type :add-entity :entity entity}))))

(defn remove-entity
  "Removes an entity on the game's flow"
  [game entity]
  (let [entity (setup-entity entity)]
    (-> game
        (update :entities dissoc (:id entity))
        (update :events conj {:type :remove-entity :entity entity}))))
