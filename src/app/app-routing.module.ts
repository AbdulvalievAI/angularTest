import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ButtonsComponent } from './pages/buttons/buttons.component';
import { ExpansionPanelComponent } from './pages/expansion-panel/expansion-panel.component';
import { TypographyComponent } from './pages/typography/typography.component';
import { LifeComponentsComponent } from './pages/life-components/life-components.component';
import { NgContentTemplateComponent } from './pages/ng-content-template/ng-content-template.component';
import { FetchDataComponent } from './pages/fetch-data/fetch-data.component';

const routes: Routes = [
  {
    path: 'buttons',
    component: ButtonsComponent,
  },
  {
    path: 'expansion-panel',
    component: ExpansionPanelComponent,
  },
  {
    path: 'typography',
    component: TypographyComponent,
  },
  {
    path: 'life-components',
    component: LifeComponentsComponent,
  },
  {
    path: 'ng-content-template',
    component: NgContentTemplateComponent,
  },
  {
    path: 'fetch-data',
    component: FetchDataComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
