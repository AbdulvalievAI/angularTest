import { ConfigOption } from "@ngx-formly/core";
import {InputIconComponent} from "./components/input-icon/input-icon.component";
import {FormlyComponentWrapperComponent} from "./wrappes/formly-component-wrapper/formly-component-wrapper.component";

export const ConfigFormly: ConfigOption = {
  types: [
    {
      name: "input-icon",
      component: InputIconComponent,
      wrappers: ["formly-component-wrapper"],
      // defaultOptions: {
      //   templateOptions: {
      //     decCount: 0,
      //     addClass: "form-control form-control-sm object-form__table-input",
      //     type: "number",
      //   },
      // },
    },
  ],
  wrappers: [
    {
      name: "formly-component-wrapper",
      component: FormlyComponentWrapperComponent,
    }
  ],
};
