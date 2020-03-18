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
var inversify_1 = require("inversify");
var sprotty_1 = require("sprotty");
var views_1 = require("./views");
var popup_1 = require("./popup");
var model_source_1 = require("./model-source");
var label_validation_1 = require("./label-validation");
var model_1 = require("./model");
exports.default = (function (containerId) {
    // require("../../../css/sprotty.css");
    // require("../../../css/command-palette.css");
    // require("../../../css/edit-label.css");
    // require("../css/diagram.css");
    var classDiagramModule = new inversify_1.ContainerModule(function (bind, unbind, isBound, rebind) {
        bind(sprotty_1.TYPES.ModelSource).to(model_source_1.ClassDiagramModelSource).inSingletonScope();
        rebind(sprotty_1.TYPES.ILogger).to(sprotty_1.ConsoleLogger).inSingletonScope();
        rebind(sprotty_1.TYPES.LogLevel).toConstantValue(sprotty_1.LogLevel.log);
        bind(sprotty_1.TYPES.IPopupModelProvider).to(popup_1.PopupModelProvider);
        bind(sprotty_1.TYPES.ICommandPaletteActionProvider).to(sprotty_1.RevealNamedElementActionProvider);
        bind(sprotty_1.TYPES.ISnapper).to(sprotty_1.CenterGridSnapper);
        bind(sprotty_1.TYPES.IEditLabelValidator).to(label_validation_1.ClassDiagramLabelValidator);
        bind(sprotty_1.TYPES.IEditLabelValidationDecorator).to(label_validation_1.ClassDiagramLabelValidationDecorator);
        var context = { bind: bind, unbind: unbind, isBound: isBound, rebind: rebind };
        sprotty_1.configureModelElement(context, 'graph', sprotty_1.SGraph, sprotty_1.SGraphView);
        sprotty_1.configureModelElement(context, 'node:package', sprotty_1.RectangularNode, views_1.NodeView);
        sprotty_1.configureModelElement(context, 'node:class', model_1.ClassNode, views_1.NodeView, {
            enable: [sprotty_1.expandFeature, sprotty_1.nameFeature, sprotty_1.withEditLabelFeature]
        });
        sprotty_1.configureModelElement(context, 'label:heading', model_1.ClassLabel, sprotty_1.SLabelView, {
            enable: [sprotty_1.editLabelFeature]
        });
        sprotty_1.configureModelElement(context, 'label:text', model_1.PropertyLabel, sprotty_1.SLabelView, {
            enable: [sprotty_1.editLabelFeature]
        });
        sprotty_1.configureModelElement(context, 'comp:comp', sprotty_1.SCompartment, sprotty_1.SCompartmentView);
        sprotty_1.configureModelElement(context, 'comp:header', sprotty_1.SCompartment, sprotty_1.SCompartmentView);
        sprotty_1.configureModelElement(context, 'comp:pkgcontent', sprotty_1.SCompartment, sprotty_1.SCompartmentView);
        sprotty_1.configureModelElement(context, 'icon', model_1.Icon, views_1.IconView);
        sprotty_1.configureModelElement(context, 'label:icon', sprotty_1.SLabel, sprotty_1.SLabelView);
        sprotty_1.configureModelElement(context, 'edge:straight', sprotty_1.SEdge, sprotty_1.PolylineEdgeView);
        sprotty_1.configureModelElement(context, 'html', sprotty_1.HtmlRoot, sprotty_1.HtmlRootView);
        sprotty_1.configureModelElement(context, 'pre-rendered', sprotty_1.PreRenderedElement, sprotty_1.PreRenderedView);
        sprotty_1.configureModelElement(context, 'button:expand', sprotty_1.SButton, sprotty_1.ExpandButtonView);
        sprotty_1.configureModelElement(context, 'routing-point', sprotty_1.SRoutingHandle, sprotty_1.SRoutingHandleView);
        sprotty_1.configureModelElement(context, 'volatile-routing-point', sprotty_1.SRoutingHandle, sprotty_1.SRoutingHandleView);
        sprotty_1.configureViewerOptions(context, {
            needsClientLayout: true,
            baseDiv: containerId
        });
    });
    var container = new inversify_1.Container();
    sprotty_1.loadDefaultModules(container);
    container.load(classDiagramModule);
    return container;
});
//# sourceMappingURL=di.config.js.map