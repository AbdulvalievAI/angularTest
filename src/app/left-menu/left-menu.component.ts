import { Component, Input } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-left-menu',
  templateUrl: './left-menu.component.html',
  styleUrls: ['./left-menu.component.scss'],
})
export class LeftMenuComponent {
  @Input() snav: MatSidenav;
  public links = [
    {
      title: 'Buttons',
      route: 'buttons',
    },
    {
      title: 'Expansion panel',
      route: 'expansion-panel',
    },
    {
      title: 'Typography',
      route: 'typography',
    },
    {
      title: 'Life components',
      route: 'life-components',
    },
    {
      title: 'NG Content / Template',
      route: 'ng-content-template',
    },
    {
      title: 'Fetch data',
      route: 'fetch-data',
    },
  ];
}
