import {
  ChangeDetectorRef,
  Component,
  OnDestroy,
  ViewChild,
} from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { OverlayContainer } from '@angular/cdk/overlay';
import { MatMenuTrigger } from '@angular/material/menu';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnDestroy {
  mobileQuery: MediaQueryList;

  private _mobileQueryListener: () => void;

  constructor(
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher,
    private _overlayContainer: OverlayContainer
  ) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  @ViewChild(MatMenuTrigger) trigger: MatMenuTrigger;

  someMethod(asd: any) {
    this.trigger.openMenu();
  }

  public _theme = 'light-theme';
  public typesOfShoes = [
    {
      title: 'Light theme',
      value: 'light-theme',
      icon: 'wb_sunny',
    },
    {
      title: 'Dark theme',
      value: 'dark-theme',
      icon: 'nights_stay',
    },
    {
      title: 'Light theme contrast',
      value: 'light-theme-contrast',
      icon: 'wb_sunny',
    },
    {
      title: 'Dark theme contrast',
      value: 'dark-theme-contrast',
      icon: 'nights_stay',
    },
  ];

  public set theme(typeTheme: string) {
    this._theme = typeTheme;
  }
}
