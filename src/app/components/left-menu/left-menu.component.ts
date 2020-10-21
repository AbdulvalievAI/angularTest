import { Component, Input, OnInit } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { ILinkLeftMenu } from '../../../interfaces/ILink-left-menu';

@Component({
  selector: 'app-left-menu',
  templateUrl: './left-menu.component.html',
  styleUrls: ['./left-menu.component.scss'],
})
export class LeftMenuComponent implements OnInit {
  @Input() snav: MatSidenav;
  public links: Array<ILinkLeftMenu> = [];

  constructor(private _router: Router) {
  }

  ngOnInit(): void {
    this._router.config.forEach((route) => {
      if (!route.data || !route.data.title) { return; }
      this.links.push({
        title: route.data.title,
        path: route.path
      });
    });
  }
}
