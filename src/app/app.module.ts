import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MyMaterialModule } from './my-material/my-material.module';

import { LeftMenuComponent } from './left-menu/left-menu.component';
import { ButtonsComponent } from './pages/buttons/buttons.component';
import { ExpansionPanelComponent } from './pages/expansion-panel/expansion-panel.component';
import { TypographyComponent } from './pages/typography/typography.component';
import { LifeComponentsComponent } from './pages/life-components/life-components.component';
import { LifeComponentsItemComponent } from './pages/life-components/life-components-item/life-components-item.component';
import { NgContentTemplateComponent } from './pages/ng-content-template/ng-content-template.component';
import { NgContentTemplateItemComponent } from './pages/ng-content-template/ng-content-template-item/ng-content-template-item.component';

@NgModule({
  declarations: [
    AppComponent,
    LeftMenuComponent,
    ButtonsComponent,
    ExpansionPanelComponent,
    TypographyComponent,
    LifeComponentsComponent,
    LifeComponentsItemComponent,
    NgContentTemplateComponent,
    NgContentTemplateItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MyMaterialModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
