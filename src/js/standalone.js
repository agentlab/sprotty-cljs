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
var di_config_1 = require("./di.config");
var sprotty_1 = require("sprotty");
function runClassDiagram() {
    var container = di_config_1.default('sprotty');
    var modelSource = container.get(sprotty_1.TYPES.ModelSource);
    modelSource.updateModel();
}
exports.default = runClassDiagram;
//# sourceMappingURL=standalone.js.map