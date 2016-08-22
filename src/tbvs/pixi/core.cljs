(ns tbvs.pixi.core
  "Cljs wrapper for Pixi.js")

(defn create-renderer
  "Creates a renderer"
  ([w h]
   (create-renderer w h nil))
  ([w h options]
   (if (:test options)
     (new js/PIXI.CanvasRenderer w, h, (clj->js options))
     (js/PIXI.autoDetectRenderer w h (clj->js options)))))

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

(defn set-scale
  "Sets the scale of a sprite"
  [sprite scale-x scale-y]
  (set! (-> sprite .-scale .-x) scale-x)
  (set! (-> sprite .-scale .-y) scale-y))

(defn set-anchor
  "Sets the x y anchor of a sprite"
  [sprite x y]
  (set! (-> sprite .-anchor .-x) x)
  (set! (-> sprite .-anchor .-y) y))

(defn set-rotation
  "Sets the roration"
  [sprite rotation]
  (set! (-> sprite .-rotation) rotation))

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
