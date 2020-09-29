import { Component, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-ng-content-template-item',
  templateUrl: './ng-content-template-item.component.html',
  styleUrls: ['./ng-content-template-item.component.scss'],
})
export class NgContentTemplateItemComponent {
  @Input() template: TemplateRef<any>;
}
