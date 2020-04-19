
(ns app.test
  (:require ["reflect-metadata"]
            ["sprotty" :as sprotty]

            ;; [reagent.core :as reagent :refer [atom]]
            [app.model]))

(defonce model-state (atom {:currentRoot (app.model/initializeModel)}))

;; ---
(defn ^:export Test []
  (this-as this
           (.call sprotty/LocalModelSource this)
           (set! (.-currentRoot this) (clj->js (app.model/initializeModel)))
           this))

(defn updateState [this newState]
  (set! (.-currentRoot this) (clj->js newState))
  (.call (.. sprotty/LocalModelSource -prototype -updateModel) this))

(defn auto-update [this]
  (add-watch model-state :watcher
             (fn [key atom old-state new-state]
               (updateState this (:currentRoot new-state)))))

(defn initialize [this registry]
  (auto-update this)
  (.call (.. sprotty/LocalModelSource -prototype -initialize) this registry)
  (.register registry sprotty/CollapseExpandAction.KIND this)
        ;;    (.register registry sprotty/CollapseExpandAllAction.KIND this)
  )

(defn onExpandCollapse [action]
  (js/console.log "DEBUG")
  (let [expandIds (.-expandIds action)
        collapseIds (.-collapseIds action)
        root (:currentRoot @model-state)
        path-map (app.model/get-all-path [] root)]
    (swap! model-state assoc :currentRoot
           (reduce #(assoc-in %1 (get path-map (get %2 :id)) %2) root
                   (concat (->> expandIds
                                (map #(get-in root (get path-map %)))
                                (map #(assoc % :expanded true))
                                (map #(assoc % :children (concat (get % :children) (app.model/getChildren (get % :id))))))
                           (->> collapseIds
                                (map #(get-in root (get path-map %)))
                                (map #(assoc % :expanded false))
                                (map #(assoc % :children (filter (fn [e] (not= (:type e) "comp:comp")) (get % :children))))))))))

(defn handle [this action]
  (let [kind (.-kind action)]
    (js/console.log "ACTION" kind)
    (cond
      (= kind sprotty/CollapseExpandAction.KIND) (onExpandCollapse action)
      :else (.call (.. sprotty/LocalModelSource -prototype -handle) this action))))

(set! (.-prototype Test)
      (js/Object.create (.-prototype sprotty/LocalModelSource)
                        #js {:initialize #js {:value
                                              (fn [registry]
                                                (this-as this (initialize this registry)))}
                             :handle #js {:value
                                          (fn [action]
                                            (this-as this (handle this action)))}}))
;; ---
