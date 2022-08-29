import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageServerPlaytimeRootComponent } from 'src/app/features/server-playtime/pages/page-server-playtime-root/page-server-playtime-root.component';

const routes: Routes = [
  { path: 'server-playtime', component: PageServerPlaytimeRootComponent },
  { path: '', component: PageServerPlaytimeRootComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
