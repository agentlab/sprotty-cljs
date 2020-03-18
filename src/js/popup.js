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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = require("inversify");
var sprotty_1 = require("sprotty");
var PopupModelProvider = /** @class */ (function () {
    function PopupModelProvider() {
    }
    PopupModelProvider.prototype.getPopupModel = function (request, element) {
        if (element !== undefined && element.type === 'node:class') {
            var node = this.modelFactory.createElement(element);
            return {
                type: 'html',
                id: 'popup',
                children: [
                    {
                        type: 'pre-rendered',
                        id: 'popup-title',
                        code: "<div class=\"sprotty-popup-title\">Class " + node.name + "</div>"
                    },
                    {
                        type: 'pre-rendered',
                        id: 'popup-body',
                        code: '<div class="sprotty-popup-body">But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.</div>'
                    }
                ]
            };
        }
        return undefined;
    };
    __decorate([
        inversify_1.inject(sprotty_1.TYPES.IModelFactory),
        __metadata("design:type", Object)
    ], PopupModelProvider.prototype, "modelFactory", void 0);
    PopupModelProvider = __decorate([
        inversify_1.injectable()
    ], PopupModelProvider);
    return PopupModelProvider;
}());
exports.PopupModelProvider = PopupModelProvider;
//# sourceMappingURL=popup.js.map