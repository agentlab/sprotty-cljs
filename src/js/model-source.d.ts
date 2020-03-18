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
import { Action, ActionHandlerRegistry, CollapseExpandAction, CollapseExpandAllAction, LocalModelSource, SModelElementSchema, SModelRootSchema } from 'sprotty';
export declare class ClassDiagramModelSource extends LocalModelSource {
    expansionState: {
        [key: string]: boolean;
    };
    constructor();
    initialize(registry: ActionHandlerRegistry): void;
    handle(action: Action): void;
    protected handleCollapseExpandAction(action: CollapseExpandAction): void;
    protected handleCollapseExpandAllAction(action: CollapseExpandAllAction): void;
    protected applyExpansionState(): void;
    protected addExpandedChildren(element: SModelElementSchema): void;
    initializeModel(): SModelRootSchema;
}
//# sourceMappingURL=model-source.d.ts.map