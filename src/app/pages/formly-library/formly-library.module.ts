import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormlyModule } from "@ngx-formly/core";
import { ConfigFormly } from "./formly-library.config";
import { FormlyMaterialModule } from '@ngx-formly/material';
import { FormlyComponentWrapperComponent } from "./wrappes/formly-component-wrapper/formly-component-wrapper.component";
import { InputIconComponent } from "./components/input-icon/input-icon.component";
import { FormlyLibraryComponent } from "./formly-library.component";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    FormlyComponentWrapperComponent,
    InputIconComponent,
    FormlyLibraryComponent,
  ],
  imports: [
    CommonModule, // ?
    FormlyModule,
    FormlyModule.forRoot(ConfigFormly),
    FormlyMaterialModule,
    ReactiveFormsModule
  ]
})
export class FormlyLibraryModule { }
