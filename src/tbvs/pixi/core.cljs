(ns tbvs.pixi.core
  "Cljs wrapper for Pixi.js")

(defn create-renderer
  "Creates a renderer"
  ([w h]
   (create-renderer w h nil))
  ([w h options]
   (js/PIXI.autoDetectRenderer w h options)))

(defn create-stage
  "Creates a main stage"
  []
  (new js/PIXI.Container))

(defn texture-from-image
  "Creates a texture from an image"
  [image-name]
  (PIXI.Texture.fromImage image-name))

(defn create-sprite
  "Creates a sprite"
  [texture]
  (new PIXI.Sprite texture))

(defn set-pos
  "Sets the x y position of a sprite"
  [sprite x y]
  (set! (-> sprite .-position .-x) x)
  (set! (-> sprite .-position .-y) y))

(defn set-anchor
  "Sets the x y anchor of a sprite"
  [sprite x y]
  (set! (-> sprite .-anchor .-x) x)
  (set! (-> sprite .-anchor .-y) y))

(defn rotate
  "Increments the rotation by the given number"
  [sprite rotation-accum]
  (set! (-> sprite .-rotation) (+ rotation-accum (-> sprite .-rotation))))

(defn register-sprite
  "Registers a sprite on a stage"
  [stage sprite]
  (.addChild stage sprite))

(defn render
  "Renders a stage via a renderer"
  [renderer stage]
  (.render renderer stage))
