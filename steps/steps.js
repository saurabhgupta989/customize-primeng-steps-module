"use strict";
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
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var router_1 = require("@angular/router");
var Steps = /** @class */ (function () {
    function Steps() {
        this.activeIndex = 0;
        this.readonly = true;
        this.activeIndexChange = new core_1.EventEmitter();
        this.hideStepNumber = false;
    }
    Steps.prototype.itemClick = function (event, item, i, isPreviousTabClickable = false, isCustomClickEvent = false) {

        if (isPreviousTabClickable || this.isPreviousTabClickable) {
            if (this.visitAllowed == null || typeof this.visitAllowed === 'undefined')
                this.visitAllowed = [0, 1];
            if (this.readonly || item.disabled) {
                if (isCustomClickEvent) {
                    if (i > this.activeIndex && !this.visitAllowed.includes(i)) {
                        event.preventDefault();
                        return;
                    }
                } else {
                    if ((i === Math.max.apply(Math, this.visitAllowed)) || i > this.activeIndex && !this.visitAllowed.includes(i)) {
                        event.preventDefault();
                        return;
                    }
                }
            }

            if (!this.visitAllowed.includes(i + 1))
                this.visitAllowed.push(i + 1);
            if (this.activeIndexChange == null)
                this.activeIndexChange = new core_1.EventEmitter();
        } else {
            console.log('dafault');
            if (this.readonly || item.disabled) {
                event.preventDefault();
                return;
            }
        }
        if (this.activeIndexChange == null)
            this.activeIndexChange = new core_1.EventEmitter();
        this.activeIndexChange.emit(i);
        if (!item.url) {
            event.preventDefault();
        }
        if (item.command) {
            item.command({
                originalEvent: event,
                item: item,
                index: i
            });
        }
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], Steps.prototype, "activeIndex", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Array)
    ], Steps.prototype, "model", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], Steps.prototype, "readonly", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], Steps.prototype, "style", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], Steps.prototype, "isPreviousTabClickable", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], Steps.prototype, "hideStepNumber", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], Steps.prototype, "styleClass", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], Steps.prototype, "activeIndexChange", void 0);
    Steps = __decorate([
        core_1.Component({
            selector: 'p-steps',
            template: "\n <div [ngClass]=\"{'ui-steps ui-widget ui-helper-clearfix':true,'ui-steps-readonly':readonly}\" [ngStyle]=\"style\" [class]=\"styleClass\">\n            <ul role=\"tablist\">\n                <li *ngFor=\"let item of model; let i = index\" class=\"ui-steps-item\" #menuitem\n                    [ngClass]=\"{'ui-state-highlight':(i === activeIndex),'ui-state-default':(i !== activeIndex),\n                        'ui-state-disabled':item.disabled||(i !== activeIndex && readonly)}\">\n                  <a *ngIf=\"!item.routerLink\" [href]=\"item.url||'#'\" class=\"ui-menuitem-link\" (click)=\"itemClick($event, item, i)\" [attr.target]=\"item.target\" [attr.id]=\"item.id\">\n                        <span class=\"ui-steps-number\" *ngIf=\"!hideStepNumber\">{{i + 1}}</span>\n                        <span class=\"ui-steps-title\">{{item.label}}</span>\n                    </a>\n                    <a *ngIf=\"item.routerLink\" [routerLink]=\"item.routerLink\" [queryParams]=\"item.queryParams\" [routerLinkActive]=\"'ui-state-active'\" [routerLinkActiveOptions]=\"item.routerLinkActiveOptions||{exact:false}\" class=\"ui-menuitem-link\" (click)=\"itemClick($event, item, i)\" [attr.target]=\"item.target\" [attr.id]=\"item.id\">\n                        <span class=\"ui-steps-number\" *ngIf=\"!hideStepNumber\">{{i + 1}}</span>\n                        <span class=\"ui-steps-title\">{{item.label}}</span>\n                    </a>\n                </li>\n            </ul>\n        </div>\n    "
        })
    ], Steps);
    return Steps;
}());
exports.Steps = Steps;
var StepsModule = /** @class */ (function () {
    function StepsModule() {
    }
    StepsModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, router_1.RouterModule],
            exports: [Steps, router_1.RouterModule],
            declarations: [Steps]
        })
    ], StepsModule);
    return StepsModule;
}());
exports.StepsModule = StepsModule;
//# sourceMappingURL=steps.js.map