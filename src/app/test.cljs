
(ns app.test
	(:require ["reflect-metadata"]
			["sprotty" :as sprotty]

			[reagent.core :as reagent :refer [atom]]
			[app.mock]
))

(defonce model-state (atom {:this 0
							:currentRoot (app.mock/initializeModel)}))
;; ---
(defn ^:export Test []
	(this-as this
		(swap! model-state assoc :this this)
		(js/console.log (clj->js (:currentRoot @model-state)))
		(.call sprotty/LocalModelSource this)
		(js/console.log this)
		; (set! (.-currentRoot this) (clj->js (:currentRoot @model-state))) ; TODO: change to setModel
	)
)

(defn initialize [registry]
		(js/console.log registry.register)
		(.call (.. sprotty/LocalModelSource -prototype -initialize) (:this @model-state) registry)
		(.register registry sprotty/CollapseExpandAction.KIND (:curr @model-state))
		(.register registry sprotty/CollapseExpandAllAction.KIND (:curr @model-state))
)

(set! (.-prototype Test)
		(js/Object.create (.-prototype sprotty/LocalModelSource)
			#js {:initialize #js {:value
									(fn [registry] 
										(initialize registry))}}
		)
)
;; ---
