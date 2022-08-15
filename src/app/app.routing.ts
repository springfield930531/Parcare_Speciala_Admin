import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthRoutetsGuardService } from './api/auth-guard.service';

// Import Containers
import { DefaultLayoutComponent } from './containers';

import { P404Component } from './views/error/404.component';
import { P500Component } from './views/error/500.component';
import { LoginComponent } from './views/login/login.component';
import { PlaceComponent } from './views/parcare-modules/place/place.component';
import { PricesComponent } from './views/parcare-modules/prices/prices.component';
import { StoragePricesComponent } from './views/parcare-modules/storage-prices/storage-prices.component';
import { TipTransportComponent } from './views/parcare-modules/tip-transport/tip-transport.component';
import { UsersComponent } from './views/parcare-modules/users/users.component';
import { ParcaredashComponent } from './views/parcaredash/parcaredash.component';
import { RegisterComponent } from './views/register/register.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'parcare-dashboard',
    pathMatch: 'full',
  },
  {
    path: '404',
    component: P404Component,
    data: {
      title: 'Page 404'
    }
  },
  {
    path: 'login',
    component: LoginComponent,
    data: {
      title: 'Login Page'
    }
  },
  {
    path: 'parcare-dashboard',
    component: ParcaredashComponent,
    canActivate: [AuthRoutetsGuardService],
    data: {
      title: 'Parcare Orhei'
    }
  },
  {
    path: 'tip-transport',
    component: TipTransportComponent,
    canActivate: [AuthRoutetsGuardService],
    data: {
      title: 'Parcare Orhei | Tip transport'
    }
  },
  {
    path: 'loc',
    component: PlaceComponent,
    canActivate: [AuthRoutetsGuardService],
    data: {
      title: 'Parcare Orhei | Loc'
    }
  },
  {
    path: 'preturi',
    component: PricesComponent,
    canActivate: [AuthRoutetsGuardService],
    data: {
      title: 'Parcare Orhei | Preturi'
    }
  },
  {
    path: 'preturi-depozitare',
    component: StoragePricesComponent,
    canActivate: [AuthRoutetsGuardService],
    data: {
      title: 'Parcare Orhei | Preturi de depozitare'
    }
  },
  {
    path: 'utilizatori',
    component: UsersComponent,
    canActivate: [AuthRoutetsGuardService],
    data: {
      title: 'Parcare Orhei | Redactare Utilizatori'
    }
  },
  
  // deja straine
  {
    path: '',
    component: DefaultLayoutComponent,
    data: {
      title: 'Home'
    },
    children: [
      {
        path: 'base',
        loadChildren: () => import('./views/base/base.module').then(m => m.BaseModule)
      },
      {
        path: 'buttons',
        loadChildren: () => import('./views/buttons/buttons.module').then(m => m.ButtonsModule)
      },
      {
        path: 'charts',
        loadChildren: () => import('./views/chartjs/chartjs.module').then(m => m.ChartJSModule)
      },
      {
        path: 'dashboard',
        loadChildren: () => import('./views/dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path: 'icons',
        loadChildren: () => import('./views/icons/icons.module').then(m => m.IconsModule)
      },
      {
        path: 'notifications',
        loadChildren: () => import('./views/notifications/notifications.module').then(m => m.NotificationsModule)
      },
      {
        path: 'theme',
        loadChildren: () => import('./views/theme/theme.module').then(m => m.ThemeModule)
      },
      {
        path: 'widgets',
        loadChildren: () => import('./views/widgets/widgets.module').then(m => m.WidgetsModule)
      }
    ]
  },
  { path: '**', component: P404Component }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' }) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
