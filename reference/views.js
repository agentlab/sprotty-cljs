/********************************************************************************
 * Copyright (c) 2017-2018 TypeFox and others.
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
/** @jsx svg */
import { svg } from 'snabbdom-jsx';
import { RectangularNodeView } from 'sprotty';
import { injectable } from 'inversify';
let NodeView = class NodeView extends RectangularNodeView {
    render(node, context) {
        return svg("g", null,
            svg("rect", { "class-sprotty-node": true, "class-node-package": node.type === 'node:package', "class-node-class": node.type === 'node:class', "class-mouseover": node.hoverFeedback, "class-selected": node.selected, x: "0", y: "0", width: Math.max(node.size.width, 0), height: Math.max(node.size.height, 0) }),
            context.renderChildren(node));
    }
};
NodeView = __decorate([
    injectable()
], NodeView);
export { NodeView };
let IconView = class IconView {
    render(element, context) {
        const radius = this.getRadius();
        return svg("g", null,
            svg("circle", { "class-sprotty-icon": true, r: radius, cx: radius, cy: radius }),
            context.renderChildren(element));
    }
    getRadius() {
        return 16;
    }
};
IconView = __decorate([
    injectable()
], IconView);
export { IconView };
