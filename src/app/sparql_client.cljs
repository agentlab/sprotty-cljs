
(ns app.sparql_client
  (:require ["reflect-metadata"]
            ["/js/schema.js" :refer (NodeShapeSchema PropertyShapeSchema)]
            ["/js/provide.js" :as provide]
  ))

(def provider (provide/createProvider))

(defn select-objects [callback]
  (provide/getObj provider NodeShapeSchema callback)
  (provide/getObj provider PropertyShapeSchema callback)
  )
