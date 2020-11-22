import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormlyModule } from "@ngx-formly/core";
import { CONFIG_FORMLY } from "./formly-library.config";
import { FormlyMaterialModule } from '@ngx-formly/material';
import { FormlyComponentWrapperComponent } from "./wrappes/formly-component-wrapper/formly-component-wrapper.component";
import { InputIconComponent } from "./components/input-icon/input-icon.component";
import { FormlyLibraryComponent } from "./formly-library.component";
import { ReactiveFormsModule } from "@angular/forms";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";

@NgModule({
  declarations: [
    FormlyComponentWrapperComponent,
    InputIconComponent,
    FormlyLibraryComponent,
  ],
  imports: [
    CommonModule, // ?
    FormlyModule,
    FormlyModule.forRoot(CONFIG_FORMLY),
    FormlyMaterialModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule
  ]
})
export class FormlyLibraryModule { }
