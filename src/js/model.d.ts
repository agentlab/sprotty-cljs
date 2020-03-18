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
import { SShapeElement, Expandable, RectangularNode, Nameable, SLabel, WithEditableLabel } from 'sprotty';
export declare class ClassNode extends RectangularNode implements Expandable, Nameable, WithEditableLabel {
    expanded: boolean;
    get editableLabel(): (import("sprotty").SChildElement & import("sprotty").EditableLabel) | undefined;
    get name(): string;
}
export declare class ClassLabel extends SLabel {
}
export declare class PropertyLabel extends SLabel {
}
export declare class Icon extends SShapeElement {
    static readonly DEFAULT_FEATURES: symbol[];
    size: {
        width: number;
        height: number;
    };
}
//# sourceMappingURL=model.d.ts.map