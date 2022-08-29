import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageServerPlaytimeRootComponent } from 'src/app/features/server-playtime/pages/page-server-playtime-root/page-server-playtime-root.component';
import { PageServerPlaytimeServerComponent } from 'src/app/features/server-playtime/pages/page-server-playtime-server/page-server-playtime-server.component';
import { PageServerPlaytimeServersComponent } from 'src/app/features/server-playtime/pages/page-server-playtime-servers/page-server-playtime-servers.component';

const routes: Routes = [
  {
    path: 'server-playtime',
    component: PageServerPlaytimeRootComponent,
    children: [
      {
        path: '',
        component: PageServerPlaytimeServersComponent,
      },
      {
        path: ':id',
        component: PageServerPlaytimeServerComponent,
      }
    ]
  },
  { path: '',   redirectTo: '/server-playtime', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
