import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyMaterialModule } from './my-material/my-material.module';

import { LeftMenuComponent } from './components/left-menu/left-menu.component';
import { ButtonsComponent } from './pages/buttons/buttons.component';
import { ExpansionPanelComponent } from './pages/expansion-panel/expansion-panel.component';
import { TypographyComponent } from './pages/typography/typography.component';
import { LifeComponentsComponent } from './pages/life-components/life-components.component';
import { LifeComponentsItemComponent } from './components/life-components-item/life-components-item.component';
import { NgContentTemplateComponent } from './pages/ng-content-template/ng-content-template.component';
import { NgContentTemplateItemComponent } from './components/ng-content-template-item/ng-content-template-item.component';
import { FetchDataComponent } from './pages/fetch-data/fetch-data.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormsComponent } from './pages/forms/forms.component';

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
    FetchDataComponent,
    FormsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MyMaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  bootstrap: [AppComponent],
  providers: [HttpClientModule],
})
export class AppModule {}
