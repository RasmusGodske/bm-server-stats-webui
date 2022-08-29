import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { MatSliderChange } from '@angular/material/slider';
import * as moment from 'moment';

export type ServerFilter = {
  selectedDate: moment.Moment,
  selectedHour: number,
  minPlayers: number | null,
}

@Component({
  selector: 'app-datetime-filter',
  templateUrl: './datetime-filter.component.html',
  styleUrls: ['./datetime-filter.component.scss'],
  host: {'class': 'datetime-filter'},
})
export class DatetimeFilterComponent implements OnInit {
  @Output() submitted = new EventEmitter<ServerFilter>();
  @Input() showSpinner = false;
  @Input() disableSubmitButton = false;

  filterForm = new FormGroup({
    selectedDate: new FormControl(new Date()),
    selectedHour: new FormControl(new Date().getHours()),
    minimum_players: new FormControl(0),
  });
  constructor() {

  }

  ngOnInit(): void {

  }

  addEvent(type: string, event: MatDatepickerInputEvent<Date>) {
    console.log(event.value);
  }
  //TODO FINISH THIS TO GET VALUE FROM SLIDER
  onInputChange(event: MatSliderChange) {
    this.filterForm.patchValue({
      selectedHour: event.value
    });
  }

  clearMinPlayers() {
    this.filterForm.patchValue({
      minimum_players: 0
    });
  }

  public onSubmit() {
    if (!(this.filterForm.value.selectedDate instanceof Date)) {
      return;
    }

    if (this.filterForm.value.selectedHour == null) {
      return;
    }

    if (this.filterForm.value.minimum_players === undefined) {
      return
    }

    let cloned_date = this.filterForm.value.selectedDate;
    cloned_date.setHours(this.filterForm.value.selectedHour);

    let moment_date = moment(cloned_date);
    let new_date = moment_date.utc()


    this.submitted.emit({
      selectedDate: new_date,
      selectedHour: moment_date.hours(),
      minPlayers: this.filterForm.value.minimum_players,
    })
  }
}
