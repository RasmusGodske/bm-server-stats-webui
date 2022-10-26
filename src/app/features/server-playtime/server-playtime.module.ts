import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { PageServerPlaytimeServersComponent } from './pages/page-server-playtime-servers/page-server-playtime-servers.component';
import { MatCardModule } from '@angular/material/card';
import { DatetimeFilterComponent } from './components/datetime-filter/datetime-filter.component';
import { MatTableModule } from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSliderModule } from '@angular/material/slider';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import { PageServerPlaytimeRootComponent } from './pages/page-server-playtime-root/page-server-playtime-root.component';
import { RouterModule } from '@angular/router';
import { PageServerPlaytimeServerComponent } from 'src/app/features/server-playtime/pages/page-server-playtime-server/page-server-playtime-server.component';
import { PlaytimeChartComponent } from './components/playtime-chart/playtime-chart.component';
import { NgChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    DatetimeFilterComponent,
    PageServerPlaytimeServersComponent,
    PageServerPlaytimeRootComponent,
    PageServerPlaytimeServerComponent,
    PlaytimeChartComponent,
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatTableModule,
    MatCardModule,
    HttpClientModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSliderModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatButtonModule,
    MatPaginatorModule,
    MatSortModule,
    RouterModule,
    NgChartsModule,
  ],
  providers: [
    DatePipe,
  ]
})
export class ServerPlaytimeModule { }
