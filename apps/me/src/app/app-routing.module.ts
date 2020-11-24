import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  { path: 'blog', loadChildren: () => import('./blog/blog.module').then(m => m.BlogModule) },
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) }
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
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
