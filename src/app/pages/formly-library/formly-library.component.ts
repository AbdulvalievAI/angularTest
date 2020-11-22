import { Component } from '@angular/core';
import {FormGroup} from "@angular/forms";
import {FormlyFieldConfig} from "@ngx-formly/core";

@Component({
  selector: 'app-formly-library',
  templateUrl: './formly-library.component.html',
  styleUrls: ['./formly-library.component.scss']
})
/** https://formly.dev/guide/getting-started */
export class FormlyLibraryComponent {
  form = new FormGroup({});
  model = { email: 'email@gmail.com' };
  fields: FormlyFieldConfig[] = [
    {
      key: 'email',
      type: 'input',
      templateOptions: {
        label: 'Email address',
        placeholder: 'Enter email',
        required: true,
      }
    },
    {
      key: 'test-field-1',
      templateOptions: {
        type: 'password',
        label: 'Password',
        placeholder: 'Enter password',
        icon: 'account_balance'
      },
      type: 'input-icon'
    },
    {
      key: 'test-field-2',
      templateOptions: {
        type: 'text',
        icon: "mode_edit"
      },
      type: 'input-icon'
    },
    {
      key: 'test-field-3',
      templateOptions: {
        type: 'text'
      },
      type: 'input-icon'
    }
  ];

  public onSubmit(): void {
    console.log(this.model);
  }
}
