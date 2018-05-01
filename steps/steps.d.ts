import { EventEmitter } from '@angular/core';
import { MenuItem } from '../common/menuitem';
export declare class Steps {
    activeIndex: number;
    model: MenuItem[];
    readonly: boolean;
    style: any;
    styleClass: string;
    activeIndexChange: EventEmitter<any>;
    itemClick(event: Event, item: MenuItem, i: number, isPreviousTabClickable?: boolean, isCustomClickEvent?: boolean): void;
    isPreviousTabClickable: boolean;
    hideStepNumber: boolean;
}
export declare class StepsModule {
}
