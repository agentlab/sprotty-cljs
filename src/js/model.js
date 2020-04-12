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
Object.defineProperty(exports, "__esModule", { value: true });
const sprotty_1 = require("sprotty");
class ClassNode extends sprotty_1.RectangularNode {
    constructor() {
        super(...arguments);
        this.expanded = false;
    }
    get editableLabel() {
        const headerComp = this.children.find(element => element.type === 'comp:header');
        if (headerComp) {
            const label = headerComp.children.find(element => element.type === 'label:heading');
            if (label && sprotty_1.isEditableLabel(label)) {
                return label;
            }
        }
        return undefined;
    }
    get name() {
        if (this.editableLabel) {
            return this.editableLabel.text;
        }
        return this.id;
    }
}
exports.ClassNode = ClassNode;
class ClassLabel extends sprotty_1.SLabel {
}
exports.ClassLabel = ClassLabel;
class PropertyLabel extends sprotty_1.SLabel {
}
exports.PropertyLabel = PropertyLabel;
class Icon extends sprotty_1.SShapeElement {
    constructor() {
        super(...arguments);
        this.size = {
            width: 32,
            height: 32
        };
    }
}
exports.Icon = Icon;
Icon.DEFAULT_FEATURES = [sprotty_1.boundsFeature, sprotty_1.layoutContainerFeature, sprotty_1.layoutableChildFeature, sprotty_1.fadeFeature];
