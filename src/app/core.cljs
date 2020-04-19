(ns app.core
  (:require [reagent.core :as reagent :refer [atom]]
			["/js/standalone.js" :as sprotty-example :default run]
			[app.model_source]
			))

;; define your app data so that it doesn't get over-written on reload

(defonce app-state (atom {:text "Hello world!"}))

(defn hello-world []
  [:div
   [:h1 (:text @app-state)]
   [:h3 "Edit this and watch it change!"]])

(defn some-component []
  [:div
   [:link {:rel "stylesheet" :href "css/diagram.css"}]
   [:link {:rel "stylesheet" :href "css/edit-label.css "}]
   [:link {:rel " stylesheet " :href " css/command-palette.css "}]
   [:link {:rel " stylesheet " :href " css/sprotty.css"}]
   [:div {:id "sprotty"}
    [:button {:on-click (fn [] 
                          (run)
						; (.hello (app.test/Test.))
                          (js/console.log "Click")
						  )} 
     "Help"]]]) 

(defn start []
  (reagent/render-component [some-component]
                            (. js/document (getElementById "app"))))

(defn ^:export init []
  ;; init is called ONCE when the page loads
  ;; this is called in the index.html and must be exported
  ;; so it is available even in :advanced release builds
  (start))

(defn stop []
  ;; stop is called before any code is reloaded
  ;; this is controlled by :before-load in the config
  (js/console.log "stop"))
