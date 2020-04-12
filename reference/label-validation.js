var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { injectable } from "inversify";
let ClassDiagramLabelValidator = class ClassDiagramLabelValidator {
    async validate(value, label) {
        if (value.length < 1) {
            return {
                severity: 'error',
                message: 'Name must not be empty'
            };
        }
        else if (value.indexOf('!') !== -1) {
            return {
                severity: 'warning',
                message: 'Name should not contain exclamation marks'
            };
        }
        return {
            severity: 'ok', message: undefined
        };
    }
};
ClassDiagramLabelValidator = __decorate([
    injectable()
], ClassDiagramLabelValidator);
export { ClassDiagramLabelValidator };
let ClassDiagramLabelValidationDecorator = class ClassDiagramLabelValidationDecorator {
    decorate(input, result) {
        const containerElement = input.parentElement;
        if (!containerElement) {
            return;
        }
        if (result.message) {
            containerElement.setAttribute('data-balloon', result.message);
            containerElement.setAttribute('data-balloon-pos', 'up-left');
            containerElement.setAttribute('data-balloon-visible', 'true');
        }
        switch (result.severity) {
            case 'ok':
                containerElement.classList.add('validation-ok');
                break;
            case 'warning':
                containerElement.classList.add('validation-warning');
                break;
            case 'error':
                containerElement.classList.add('validation-error');
                break;
        }
    }
    dispose(input) {
        const containerElement = input.parentElement;
        if (containerElement) {
            containerElement.removeAttribute('data-balloon');
            containerElement.removeAttribute('data-balloon-pos');
            containerElement.removeAttribute('data-balloon-visible');
            containerElement.classList.remove('validation-ok', 'validation-warning', 'validation-error');
        }
    }
};
ClassDiagramLabelValidationDecorator = __decorate([
    injectable()
], ClassDiagramLabelValidationDecorator);
export { ClassDiagramLabelValidationDecorator };
