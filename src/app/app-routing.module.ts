import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageServerPlaytimeRootComponent } from 'src/app/features/server-playtime/pages/page-server-playtime-root/page-server-playtime-root.component';
import { SecondComponent } from 'src/app/second/second.component';

const routes: Routes = [
  { path: 'first', component: PageServerPlaytimeRootComponent },
  { path: 'second', component: SecondComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
