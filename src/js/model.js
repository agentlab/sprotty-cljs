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
Object.defineProperty(exports, "__esModule", { value: true });
var sprotty_1 = require("sprotty");
var ClassNode = /** @class */ (function (_super) {
    __extends(ClassNode, _super);
    function ClassNode() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.expanded = false;
        return _this;
    }
    Object.defineProperty(ClassNode.prototype, "editableLabel", {
        get: function () {
            var headerComp = this.children.find(function (element) { return element.type === 'comp:header'; });
            if (headerComp) {
                var label = headerComp.children.find(function (element) { return element.type === 'label:heading'; });
                if (label && sprotty_1.isEditableLabel(label)) {
                    return label;
                }
            }
            return undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ClassNode.prototype, "name", {
        get: function () {
            if (this.editableLabel) {
                return this.editableLabel.text;
            }
            return this.id;
        },
        enumerable: true,
        configurable: true
    });
    return ClassNode;
}(sprotty_1.RectangularNode));
exports.ClassNode = ClassNode;
var ClassLabel = /** @class */ (function (_super) {
    __extends(ClassLabel, _super);
    function ClassLabel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ClassLabel;
}(sprotty_1.SLabel));
exports.ClassLabel = ClassLabel;
var PropertyLabel = /** @class */ (function (_super) {
    __extends(PropertyLabel, _super);
    function PropertyLabel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return PropertyLabel;
}(sprotty_1.SLabel));
exports.PropertyLabel = PropertyLabel;
var Icon = /** @class */ (function (_super) {
    __extends(Icon, _super);
    function Icon() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.size = {
            width: 32,
            height: 32
        };
        return _this;
    }
    Icon.DEFAULT_FEATURES = [sprotty_1.boundsFeature, sprotty_1.layoutContainerFeature, sprotty_1.layoutableChildFeature, sprotty_1.fadeFeature];
    return Icon;
}(sprotty_1.SShapeElement));
exports.Icon = Icon;
//# sourceMappingURL=model.js.map