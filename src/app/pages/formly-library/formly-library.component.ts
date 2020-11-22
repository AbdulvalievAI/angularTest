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
    }
  ];

  public onSubmit(): void {
    console.log(this.model);
  }
}
