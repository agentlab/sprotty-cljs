/********************************************************************************
 * Copyright (c) 2017-2020 TypeFox and others.
 *
 * This program and the accompanying materials are made available under the
 * terms of the Eclipse Public License v. 2.0 which is available at
 * http://www.eclipse.org/legal/epl-2.0.
 *
 * This Source Code may also be made available under the following Secondary
 * Licenses when the conditions for such availability set forth in the Eclipse
 * Public License v. 2.0 are satisfied: GNU General Public License, version 2
 * with the GNU Classpath Exception which is available at
 * https://www.gnu.org/software/classpath/license.html.
 *
 * SPDX-License-Identifier: EPL-2.0 OR GPL-2.0 WITH Classpath-exception-2.0
 ********************************************************************************/
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { injectable } from 'inversify';
import { CollapseExpandAction, CollapseExpandAllAction, LocalModelSource, SModelIndex } from 'sprotty';
let ClassDiagramModelSource = class ClassDiagramModelSource extends LocalModelSource {
    constructor() {
        super();
        this.currentRoot = this.initializeModel();
    }
    initialize(registry) {
        super.initialize(registry);
        registry.register(CollapseExpandAction.KIND, this);
        registry.register(CollapseExpandAllAction.KIND, this);
    }
    handle(action) {
        switch (action.kind) {
            case CollapseExpandAction.KIND:
                this.handleCollapseExpandAction(action);
                break;
            case CollapseExpandAllAction.KIND:
                this.handleCollapseExpandAllAction(action);
                break;
            default: super.handle(action);
        }
    }
    handleCollapseExpandAction(action) {
        action.expandIds.forEach(id => this.expansionState[id] = true);
        action.collapseIds.forEach(id => this.expansionState[id] = false);
        this.applyExpansionState();
        this.updateModel();
    }
    handleCollapseExpandAllAction(action) {
        // tslint:disable-next-line:forin
        for (const id in this.expansionState)
            this.expansionState[id] === action.expand;
        this.applyExpansionState();
        this.updateModel();
    }
    applyExpansionState() {
        const index = new SModelIndex();
        index.add(this.currentRoot);
        // tslint:disable-next-line:forin
        for (const id in this.expansionState) {
            const element = index.getById(id);
            if (element && element.children) {
                const expanded = this.expansionState[id];
                element.expanded = expanded;
                if (expanded)
					this.addExpandedChildren(element);
				else
                	element.children = element.children.filter(child => child.type !== 'comp:comp');
            }
        }
    }
    addExpandedChildren(element) {
        if (!element.children)
            return;
        switch (element.id) {
            case 'node0':
                element.children.push({
                    id: 'node0_attrs',
                    type: 'comp:comp',
                    layout: 'vbox',
                    children: [
                        {
                            id: 'node0_op2',
                            type: 'label:text',
                            text: 'name: string'
                        }
                    ],
                });
                element.children.push({
                    id: 'node0_ops',
                    type: 'comp:comp',
                    layout: 'vbox',
                    children: [
                        {
                            id: 'node0_op0',
                            type: 'label:text',
                            text: '+ foo(): integer'
                        }, {
                            id: 'node0_op1',
                            type: 'label:text',
                            text: '# bar(x: string): void'
                        }
                    ],
                });
                break;
            case 'node1':
                element.children.push({
                    id: 'node1_attrs',
                    type: 'comp:comp',
                    layout: 'vbox',
                    children: [
                        {
                            id: 'node1_op2',
                            type: 'label:text',
                            text: 'name: string'
                        }
                    ],
                });
                element.children.push({
                    id: 'node1_ops',
                    type: 'comp:comp',
                    layout: 'vbox',
                    children: [
                        {
                            id: 'node1_op0',
                            type: 'label:text',
                            text: '+ foo(): Foo'
                        }
                    ]
                });
                break;
        }
    }
    initializeModel() {
        const node0 = {
            id: 'node0',
            type: 'node:class',
            expanded: false,
            position: {
                x: 100,
                y: 100
            },
            layout: 'vbox',
            children: [
                {
                    id: 'node0_header',
                    type: 'comp:header',
                    layout: 'hbox',
                    children: [
                        {
                            id: 'node0_icon',
                            type: 'icon',
                            layout: 'stack',
                            layoutOptions: {
                                hAlign: 'center',
                                resizeContainer: false
                            },
                            children: [
                                {
                                    id: 'node0_ticon',
                                    type: 'label:icon',
                                    text: 'C'
                                }
                            ]
                        },
                        {
                            id: 'node0_classname',
                            type: 'label:heading',
                            text: 'Foo'
                        },
                        {
                            id: 'node0_expand',
                            type: 'button:expand'
                        }
                    ]
                }
            ]
        };
        const node1 = {
            id: 'node1',
            type: 'node:class',
            expanded: false,
            position: {
                x: 100,
                y: 100
            },
            layout: 'vbox',
            children: [
                {
                    id: 'node1_header',
                    type: 'comp:header',
                    layout: 'hbox',
                    children: [
                        {
                            id: 'node1_icon',
                            type: 'icon',
                            layout: 'stack',
                            layoutOptions: {
                                hAlign: 'center',
                                resizeContainer: false
                            },
                            children: [
                                {
                                    id: 'node1_ticon',
                                    type: 'label:icon',
                                    text: 'C'
                                },
                            ]
                        },
                        {
                            id: 'node1_classname',
                            type: 'label:heading',
                            text: 'Bar'
                        },
                        {
                            id: 'node1_expand',
                            type: 'button:expand'
                        }
                    ]
                }
            ]
        };
        const node2 = {
            id: 'node2',
            type: 'node:class',
            expanded: false,
            position: {
                x: 200,
                y: 350
            },
            layout: 'vbox',
            children: [
                {
                    id: 'node2_header',
                    type: 'comp:header',
                    layout: 'hbox',
                    children: [
                        {
                            id: 'node2_icon',
                            type: 'icon',
                            layout: 'stack',
                            layoutOptions: {
                                hAlign: 'center',
                                resizeContainer: false
                            },
                            children: [
                                {
                                    id: 'node2_ticon',
                                    type: 'label:icon',
                                    text: 'C'
                                },
                            ]
                        },
                        {
                            id: 'node2_classname',
                            type: 'label:heading',
                            text: 'Baz'
                        },
                        {
                            id: 'node2_expand',
                            type: 'button:expand'
                        }
                    ]
                }
            ]
        };
        const package0 = {
            id: 'package0',
            type: 'node:package',
            position: {
                x: 400,
                y: 120
            },
            size: {
                width: 400,
                height: 300
            },
            children: [
                {
                    id: 'package0_pkgname',
                    type: 'label:heading',
                    text: 'com.example.package',
                    position: {
                        x: 10,
                        y: 10
                    }
                },
                {
                    id: 'package0_content',
                    type: 'comp:pkgcontent',
                    children: [
                        node1
                    ]
                }
            ]
        };
        const edge = {
            id: 'edge',
            type: 'edge:straight',
            sourceId: node0.id,
            targetId: node1.id,
            children: [
                {
                    id: 'edge_label_on',
                    type: 'label:text',
                    text: 'on',
                    edgePlacement: {
                        position: 0.5,
                        side: 'on',
                        rotate: false
                    }
                },
                {
                    id: 'edge_label_top',
                    type: 'label:text',
                    text: 'top',
                    edgePlacement: {
                        position: 0.3,
                        side: 'top',
                        rotate: false
                    }
                },
                {
                    id: 'edge_label_bottom',
                    type: 'label:text',
                    text: 'bottom',
                    edgePlacement: {
                        position: 0.3,
                        side: 'bottom',
                        rotate: false
                    }
                },
                {
                    id: 'edge_label_left',
                    type: 'label:text',
                    text: 'left',
                    edgePlacement: {
                        position: 0.7,
                        side: 'left',
                        rotate: false
                    }
                },
                {
                    id: 'edge_label_right',
                    type: 'label:text',
                    text: 'right',
                    edgePlacement: {
                        position: 0.7,
                        side: 'right',
                        rotate: false
                    }
                }
            ]
        };
        const edge1 = {
            id: 'edge1',
            type: 'edge:straight',
            sourceId: node0.id,
            targetId: node2.id,
            routerKind: 'manhattan',
            children: [
                {
                    id: 'edge1_label_on',
                    type: 'label:text',
                    text: 'on',
                    edgePlacement: {
                        position: 0.5,
                        side: 'on',
                        rotate: true
                    }
                },
                {
                    id: 'edge1_label_top',
                    type: 'label:text',
                    text: 'top',
                    edgePlacement: {
                        position: 0,
                        side: 'top',
                    }
                },
                {
                    id: 'edge1_label_bottom',
                    type: 'label:text',
                    text: 'bottom',
                    edgePlacement: {
                        position: 0,
                        side: 'bottom',
                    }
                },
                {
                    id: 'edge1_label_left',
                    type: 'label:text',
                    text: 'left',
                    edgePlacement: {
                        position: 1,
                        side: 'left'
                    }
                },
                {
                    id: 'edge1_label_right',
                    type: 'label:text',
                    text: 'right',
                    edgePlacement: {
                        position: 1,
                        side: 'right'
                    }
                }
            ]
        };
        const graph = {
            id: 'graph',
            type: 'graph',
            children: [node0, node2, package0, edge, edge1],
            layoutOptions: {
                hGap: 5,
                hAlign: 'left',
                paddingLeft: 7,
                paddingRight: 7,
                paddingTop: 7,
                paddingBottom: 7
            }
        };
        this.expansionState = {
            node0: false,
            node1: false,
            node2: false
        };
        return graph;
    }
};
ClassDiagramModelSource = __decorate([
    injectable(),
    __metadata("design:paramtypes", [])
], ClassDiagramModelSource);
export { ClassDiagramModelSource };
