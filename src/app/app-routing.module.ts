import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ButtonsComponent } from './pages/buttons/buttons.component';
import { ExpansionPanelComponent } from './pages/expansion-panel/expansion-panel.component';
import { TypographyComponent } from './pages/typography/typography.component';
import { LifeComponentsComponent } from './pages/life-components/life-components.component';
import { NgContentTemplateComponent } from './pages/ng-content-template/ng-content-template.component';
import { FetchDataComponent } from './pages/fetch-data/fetch-data.component';
import { FormsComponent } from './pages/forms/forms.component';
import { CDKScrollingComponent } from './pages/cdkscrolling/cdkscrolling.component';
import { SwitchServicesComponent } from './pages/switch-services/switch-services.component';

const routes: Routes = [
  {
    path: 'buttons',
    data: {
      title: 'Buttons',
    },
    component: ButtonsComponent,
  },
  {
    path: 'expansion-panel',
    data: {
      title: 'Expansion panel',
    },
    component: ExpansionPanelComponent,
  },
  {
    path: 'typography',
    data: {
      title: 'Typography',
    },
    component: TypographyComponent,
  },
  {
    path: 'life-components',
    data: {
      title: 'Life components',
    },
    component: LifeComponentsComponent,
  },
  {
    path: 'ng-content-template',
    data: {
      title: 'Ng content template',
    },
    component: NgContentTemplateComponent,
  },
  {
    path: 'fetch-data',
    data: {
      title: 'Fetch data',
    },
    component: FetchDataComponent,
  },
  {
    path: 'forms',
    data: {
      title: 'Forms',
    },
    component: FormsComponent,
  },
  {
    path: 'cdkscrolling',
    data: {
      title: 'CDK Scrolling',
    },
    component: CDKScrollingComponent,
  },
  {
    path: 'switchServices',
    data: {
      title: 'Switch Services',
    },
    component: SwitchServicesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
