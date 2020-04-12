
(ns app.mock)

(defn initializeModel []
	(let [node0 {
		:id "node0"
		:type "node:class"
		:expanded false
		:position { :x 100 :y 100 }
		:layout "vbox"
	}]
	{
		:id "graph"
		:type "graph"
		:children [node0]
		:layoutOptions {
			:hGap 5
			:hAlign "left"
			:paddingLeft 7
			:paddingRight 7
			:paddingTop 7
			:paddingBottom 7
		}
	})
)

; initializeModel() {
; 	const node0 = {
; 		id: 'node0',
; 		type: 'node:class',
; 		expanded: false,
; 		position: {
; 			x: 100,
; 			y: 100
; 		},
; 		layout: 'vbox',
; 		children: [
; 			{
; 				id: 'node0_header',
; 				type: 'comp:header',
; 				layout: 'hbox',
; 				children: [
; 					{
; 						id: 'node0_icon',
; 						type: 'icon',
; 						layout: 'stack',
; 						layoutOptions: {
; 							hAlign: 'center',
; 							resizeContainer: false
; 						},
; 						children: [
; 							{
; 								id: 'node0_ticon',
; 								type: 'label:icon',
; 								text: 'C'
; 							}
; 						]
; 					},
; 					{
; 						id: 'node0_classname',
; 						type: 'label:heading',
; 						text: 'Foo'
; 					},
; 					{
; 						id: 'node0_expand',
; 						type: 'button:expand'
; 					}
; 				]
; 			}
; 		]
; 	};

; 	const node1 = {
; 		id: 'node1',
; 		type: 'node:class',
; 		expanded: false,
; 		position: {
; 			x: 100,
; 			y: 100
; 		},
; 		layout: 'vbox',
; 		children: [
; 			{
; 				id: 'node1_header',
; 				type: 'comp:header',
; 				layout: 'hbox',
; 				children: [
; 					{
; 						id: 'node1_icon',
; 						type: 'icon',
; 						layout: 'stack',
; 						layoutOptions: {
; 							hAlign: 'center',
; 							resizeContainer: false
; 						},
; 						children: [
; 							{
; 								id: 'node1_ticon',
; 								type: 'label:icon',
; 								text: 'C'
; 							},
; 						]
; 					},
; 					{
; 						id: 'node1_classname',
; 						type: 'label:heading',
; 						text: 'Bar'
; 					},
; 					{
; 						id: 'node1_expand',
; 						type: 'button:expand'
; 					}
; 				]
; 			}
; 		]
; 	};
; 	const node2 = {
; 		id: 'node2',
; 		type: 'node:class',
; 		expanded: false,
; 		position: {
; 			x: 200,
; 			y: 350
; 		},
; 		layout: 'vbox',
; 		children: [
; 			{
; 				id: 'node2_header',
; 				type: 'comp:header',
; 				layout: 'hbox',
; 				children: [
; 					{
; 						id: 'node2_icon',
; 						type: 'icon',
; 						layout: 'stack',
; 						layoutOptions: {
; 							hAlign: 'center',
; 							resizeContainer: false
; 						},
; 						children: [
; 							{
; 								id: 'node2_ticon',
; 								type: 'label:icon',
; 								text: 'C'
; 							},
; 						]
; 					},
; 					{
; 						id: 'node2_classname',
; 						type: 'label:heading',
; 						text: 'Baz'
; 					},
; 					{
; 						id: 'node2_expand',
; 						type: 'button:expand'
; 					}
; 				]
; 			}
; 		]
; 	};
; 	const package0 = {
; 		id: 'package0',
; 		type: 'node:package',
; 		position: {
; 			x: 400,
; 			y: 120
; 		},
; 		size: {
; 			width: 400,
; 			height: 300
; 		},
; 		children: [
; 			{
; 				id: 'package0_pkgname',
; 				type: 'label:heading',
; 				text: 'com.example.package',
; 				position: {
; 					x: 10,
; 					y: 10
; 				}
; 			},
; 			{
; 				id: 'package0_content',
; 				type: 'comp:pkgcontent',
; 				children: [
; 					node1
; 				]
; 			}
; 		]
; 	};
; 	const edge = {
; 		id: 'edge',
; 		type: 'edge:straight',
; 		sourceId: node0.id,
; 		targetId: node1.id,
; 		children: [
; 			{
; 				id: 'edge_label_on',
; 				type: 'label:text',
; 				text: 'on',
; 				edgePlacement: {
; 					position: 0.5,
; 					side: 'on',
; 					rotate: false
; 				}
; 			},
; 			{
; 				id: 'edge_label_top',
; 				type: 'label:text',
; 				text: 'top',
; 				edgePlacement: {
; 					position: 0.3,
; 					side: 'top',
; 					rotate: false
; 				}
; 			},
; 			{
; 				id: 'edge_label_bottom',
; 				type: 'label:text',
; 				text: 'bottom',
; 				edgePlacement: {
; 					position: 0.3,
; 					side: 'bottom',
; 					rotate: false
; 				}
; 			},
; 			{
; 				id: 'edge_label_left',
; 				type: 'label:text',
; 				text: 'left',
; 				edgePlacement: {
; 					position: 0.7,
; 					side: 'left',
; 					rotate: false
; 				}
; 			},
; 			{
; 				id: 'edge_label_right',
; 				type: 'label:text',
; 				text: 'right',
; 				edgePlacement: {
; 					position: 0.7,
; 					side: 'right',
; 					rotate: false
; 				}
; 			}
; 		]
; 	};
; 	const edge1 = {
; 		id: 'edge1',
; 		type: 'edge:straight',
; 		sourceId: node0.id,
; 		targetId: node2.id,
; 		routerKind: 'manhattan',
; 		children: [
; 			{
; 				id: 'edge1_label_on',
; 				type: 'label:text',
; 				text: 'on',
; 				edgePlacement: {
; 					position: 0.5,
; 					side: 'on',
; 					rotate: true
; 				}
; 			},
; 			{
; 				id: 'edge1_label_top',
; 				type: 'label:text',
; 				text: 'top',
; 				edgePlacement: {
; 					position: 0,
; 					side: 'top',
; 				}
; 			},
; 			{
; 				id: 'edge1_label_bottom',
; 				type: 'label:text',
; 				text: 'bottom',
; 				edgePlacement: {
; 					position: 0,
; 					side: 'bottom',
; 				}
; 			},
; 			{
; 				id: 'edge1_label_left',
; 				type: 'label:text',
; 				text: 'left',
; 				edgePlacement: {
; 					position: 1,
; 					side: 'left'
; 				}
; 			},
; 			{
; 				id: 'edge1_label_right',
; 				type: 'label:text',
; 				text: 'right',
; 				edgePlacement: {
; 					position: 1,
; 					side: 'right'
; 				}
; 			}
; 		]
; 	};
; 	const graph = {
; 		id: 'graph',
; 		type: 'graph',
; 		children: [node0, node2, package0, edge, edge1],
; 		layoutOptions: {
; 			hGap: 5,
; 			hAlign: 'left',
; 			paddingLeft: 7,
; 			paddingRight: 7,
; 			paddingTop: 7,
; 			paddingBottom: 7
; 		}
; 	};
; 	this.expansionState = {
; 		node0: false,
; 		node1: false,
; 		node2: false
; 	};
; 	return graph;
; }
