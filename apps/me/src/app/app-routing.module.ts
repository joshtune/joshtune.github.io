import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppComponent} from "./app.component";
import {HomeComponent} from "./pages/home/home.component";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  }
  // {
  //   path: '',
  //   redirectTo: 'home',
  //   pathMatch: 'full',
  // },
  // {
  //   path: 'login',
  //   component: LoginPageComponent,
  // },
  // {
  //   path: '',
  //   component: MainLayoutComponent,
  //   children: [
  //     {
  //       path: 'home',
  //       loadChildren: () =>
  //         import('./features/home/home.module').then((m) => m.HomeModule),
  //     },
  //     {
  //       path: 'sacrament',
  //       loadChildren: () =>
  //         import('./features/sacrament/sacrament.module').then(
  //           (m) => m.SacramentModule
  //         ),
  //     },
  //     {
  //       path: 'cheat-sheet',
  //       canActivate: [AuthGuard],
  //       loadChildren: () =>
  //         import('./features/cheat-sheet/cheat-sheet.module').then(
  //           (m) => m.CheatSheetModule
  //         ),
  //     },
  //   ],
  // },
  // {
  //   path: '**',
  //   component: PageNotFoundPageComponent,
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
