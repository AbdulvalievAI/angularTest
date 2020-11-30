import { Component } from '@angular/core';
import { FieldType } from "@ngx-formly/core";

@Component({
  selector: 'app-input-icon',
  templateUrl: './input-icon.component.html',
  styleUrls: ['./input-icon.component.scss']
})
export class InputIconComponent extends FieldType {
  get type(): string {
    return this.to.type
  }

  get label(): string {
    return this.to.label
  }

  get placeholder(): string {
    return this.to.placeholder;
  }

  get icon(): string {
    return this.to.icon;
  }
}

