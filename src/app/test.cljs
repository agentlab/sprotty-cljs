
(ns app.test
  (:require ["reflect-metadata"]
            ["sprotty" :as sprotty]

            [reagent.core :as reagent :refer [atom]]
            [app.mock]))

(defonce model-state (atom {:currentRoot (app.mock/initializeModel)}))

;; ---
(defn ^:export Test []
  (this-as this
           (.call sprotty/LocalModelSource this)
           (set! (.-currentRoot this) (clj->js (app.mock/initializeModel)))
           this))

(defn initialize [this registry]
  (js/console.log this)
  (js/console.log "help")
  (.call (.. sprotty/LocalModelSource -prototype -initialize) this registry)
  (.register registry sprotty/CollapseExpandAction.KIND this)
        ;;    (.register registry sprotty/CollapseExpandAllAction.KIND this)
  )

(defn onExpandCollapse [action]
  (js/console.log "DEBUG")
  (let [expandIds (.-expandIds action)
        collapseIds (.-collapseIds action)]
    (js/console.log expandIds)

    ))

(defn handle [this action]
  (let [kind (.-kind action)]
    (cond
      (= kind sprotty/CollapseExpandAction.KIND) (onExpandCollapse action)
      :else (.call (.. sprotty/LocalModelSource -prototype -handle) this action))
  ))

(set! (.-prototype Test)
      (js/Object.create (.-prototype sprotty/LocalModelSource)
                        #js {:initialize #js {:value
                                              (fn [registry]
                                                (this-as this (initialize this registry)))}
                             :handle #js {:value
                                          (fn [action]
                                            (this-as this (handle this action)))}}))
;; ---
