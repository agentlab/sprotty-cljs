
(ns app.exp)

(defn ^:export cljsprint [message]
	(js/console.log message))
