"use strict";
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
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
/** @jsx svg */
var snabbdom_jsx_1 = require("snabbdom-jsx");
var sprotty_1 = require("sprotty");
var inversify_1 = require("inversify");
var NodeView = /** @class */ (function (_super) {
    __extends(NodeView, _super);
    function NodeView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NodeView.prototype.render = function (node, context) {
        return snabbdom_jsx_1.svg("g", null,
            snabbdom_jsx_1.svg("rect", { "class-sprotty-node": true, "class-node-package": node.type === 'node:package', "class-node-class": node.type === 'node:class', "class-mouseover": node.hoverFeedback, "class-selected": node.selected, x: "0", y: "0", width: Math.max(node.size.width, 0), height: Math.max(node.size.height, 0) }),
            context.renderChildren(node));
    };
    NodeView = __decorate([
        inversify_1.injectable()
    ], NodeView);
    return NodeView;
}(sprotty_1.RectangularNodeView));
exports.NodeView = NodeView;
var IconView = /** @class */ (function () {
    function IconView() {
    }
    IconView.prototype.render = function (element, context) {
        var radius = this.getRadius();
        return snabbdom_jsx_1.svg("g", null,
            snabbdom_jsx_1.svg("circle", { "class-sprotty-icon": true, r: radius, cx: radius, cy: radius }),
            context.renderChildren(element));
    };
    IconView.prototype.getRadius = function () {
        return 16;
    };
    IconView = __decorate([
        inversify_1.injectable()
    ], IconView);
    return IconView;
}());
exports.IconView = IconView;
//# sourceMappingURL=views.js.map