import { BaseComponent, BaseElement, BaseOptions } from '../base';
import { FormioComponents } from '../components';
import { FormioTemplate } from '../../formio.template';
import { FormArray, FormGroup, FormControl } from '@angular/forms';

export interface FieldSetOptions extends BaseOptions<any> {
    components: Array<any>,
    legend?: string
}

export class FieldSetComponent extends BaseComponent<FieldSetOptions> {
    getControl(): FormArray | FormGroup | FormControl {
        if (!this.control) {
            this.control = new FormGroup({});
        }
        return this.control;
    }
}

export class FieldSetElement extends BaseElement<FieldSetComponent> {
    get numComponents() : number { return this.component.settings.components.length; }
}

export function FieldSet(template:FormioTemplate) {
    FormioComponents.register('fieldset', FieldSetComponent, FieldSetElement, {
        template: template.components.fieldset
    });
    return FieldSetElement;
}
