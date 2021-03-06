(defproject tbvs "0.1.0-SNAPSHOT"
  :description "FIXME: write this!"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}

  :min-lein-version "2.5.3"
  
  :dependencies [[org.clojure/clojure "1.8.0"]
                 [org.clojure/clojurescript "1.8.51"]
                 [devcards "0.2.1-7"]
                 [sablono "0.7.1"]
                 [reagent "0.6.0-rc"]

                 ;; need to specify this for sablono
                 ;; when not using devcards
                 [cljsjs/react "15.0.2-0"]
                 [cljsjs/react-dom "15.0.2-0"]
                 [cljsjs/react-dom-server "15.0.2-0"]
                 #_[org.omcljs/om "0.9.0"]
                 #_[reagent "0.5.1"]
                 ]

  :plugins [[lein-figwheel "0.5.3-2"]
            [lein-cljsbuild "1.1.3" :exclusions [org.clojure/clojure]]]

  :clean-targets ^{:protect false} ["resources/public/js/compiled"
                                    "target"]
  
  :source-paths ["src"]

  :cljsbuild {
              :builds [{:id "devcards"
                        :source-paths ["src"]
                        :figwheel { :devcards true }
                        :compiler { :main       "tbvs.devcards.core"
                                    :asset-path "js/compiled/tbvs_out"
                                    :output-to  "resources/public/js/compiled/tbvs_devcards.js"
                                    :output-dir "resources/public/js/compiled/tbvs_out"
                                    :source-map-timestamp true }}
                       {:id "dev"
                        :source-paths ["src"]
                        :figwheel true
                        :compiler {:main       "tbvs.devcards.core"
                                   :asset-path "js/compiled/out"
                                   :output-to  "resources/public/js/compiled/tbvs.js"
                                   :output-dir "resources/public/js/compiled/out"
                                   :source-map-timestamp true }}
                       {:id "prod"
                        :source-paths ["src"]
                        :compiler {:main       "tbvs.devcards.core"
                                   :asset-path "js/compiled/out"
                                   :output-to  "resources/public/js/compiled/tbvs.js"
                                   :optimizations :advanced}}]}

  :figwheel { :css-dirs ["resources/public/css"] })
