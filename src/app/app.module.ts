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
import { RouterModule } from '@angular/router';
import { CDKScrollingComponent } from './pages/cdkscrolling/cdkscrolling.component';
import { ScrollingModule } from '@angular/cdk/scrolling';

import { environment } from '../environments/environment';
import { AbstractSource } from '../services/test-provide/abstractSource';
import { SwitchServicesComponent } from './pages/switch-services/switch-services.component';
import { FormlyLibraryModule } from "./pages/formly-library/formly-library.module";

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
    CDKScrollingComponent,
    SwitchServicesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MyMaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    ScrollingModule,
    FormlyLibraryModule/*.forRoot({ extras: { lazyRender: true } })*/,
  ],
  bootstrap: [AppComponent],
  providers: [
    HttpClientModule,
    {
      provide: AbstractSource,
      useClass: environment.typeSourceService,
    },
  ],
})
export class AppModule {}
