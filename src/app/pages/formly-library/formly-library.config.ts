import { ConfigOption } from "@ngx-formly/core";
import { InputIconComponent } from "./components/input-icon/input-icon.component";
import { FormlyComponentWrapperComponent } from "./wrappes/formly-component-wrapper/formly-component-wrapper.component";

export const CONFIG_FORMLY: ConfigOption = {
  types: [
    {
      name: "input-icon",
      wrappers: ["formly-component-wrapper"],
      component: InputIconComponent,
      defaultOptions: {
        templateOptions: {
          type: "text",
          label: "Text Label",
          placeholder: 'Placeholder'
        },
      },
    },
  ],
  wrappers: [
    {
      name: "formly-component-wrapper",
      component: FormlyComponentWrapperComponent,
    }
  ],
};
