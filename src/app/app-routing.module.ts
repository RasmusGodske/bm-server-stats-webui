import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServerPlaytimeViewComponent } from 'src/app/server-playtime-view/server-playtime-view.component';
import { SecondComponent } from 'src/app/second/second.component';

const routes: Routes = [
  { path: 'first', component: ServerPlaytimeViewComponent },
  { path: 'second', component: SecondComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
