
(ns app.test
  (:require ["reflect-metadata"]
            ["sprotty" :as sprotty]

            [reagent.core :as reagent :refer [atom]]
            [app.model]))

(defonce model-state (atom {:currentRoot (app.model/initializeModel)}))

;; ---
(defn ^:export Test []
  (this-as this
           (.call sprotty/LocalModelSource this)
           (set! (.-currentRoot this) (clj->js (app.model/initializeModel)))
           this))

(defn initialize [this registry]
  (.call (.. sprotty/LocalModelSource -prototype -initialize) this registry)
  (.register registry sprotty/CollapseExpandAction.KIND this)
        ;;    (.register registry sprotty/CollapseExpandAllAction.KIND this)
  )

(defn updateState [this]
  (set! (.-currentRoot this) (clj->js (:currentRoot @model-state)))
  (.call (.. sprotty/LocalModelSource -prototype -updateModel) this)
  )

(defn onExpandCollapse [action]
  (js/console.log "DEBUG")
  (let [expandIds (.-expandIds action)
        collapseIds (.-collapseIds action)
        root (:currentRoot @model-state)
        path-map (app.model/get-all-path [] root)]
    (swap! model-state assoc :currentRoot
           (let [new-root (->> expandIds
                               (map #(get-in root (get path-map %)))
                               (map #(assoc % :expanded true))
                               (map #(assoc % :children (concat (get % :children) (app.model/getChildren (get % :id)))))
                               (reduce #(assoc-in %1 (get path-map (get %2 :id)) %2) root)
                               )]
             (->> collapseIds
                  (map #(get-in new-root (get path-map %)))
                  (map #(assoc % :expanded false))
                  (map #(assoc % :children (filter (fn [e] (not= (:type e) "comp:comp")) (get % :children))))
                  (reduce #(assoc-in %1 (get path-map (get %2 :id)) %2) new-root)))
    )
   )
  )

(defn handle [this action]
  (let [kind (.-kind action)]
    (js/console.log "ACTION" kind)
    (cond
      (= kind sprotty/CollapseExpandAction.KIND) ((fn [] (onExpandCollapse action)
                                                    (updateState this)
                                                    (js/console.log (clj->js(:currentRoot @model-state)))
                                                    ))
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
