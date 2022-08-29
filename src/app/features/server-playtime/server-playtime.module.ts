import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { PageServerPlaytimeRootComponent } from './pages/page-server-playtime-root/page-server-playtime-root.component';
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

@NgModule({
  declarations: [
    PageServerPlaytimeRootComponent,
    DatetimeFilterComponent,
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
  ],
  providers: [
    DatePipe,
  ]
})
export class ServerPlaytimeModule { }
