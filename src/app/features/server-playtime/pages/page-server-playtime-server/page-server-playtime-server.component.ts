import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';


export interface Server {
  name: string;
  average_playtime: number;
  unique_players: number;
}


@Component({
  selector: 'app-page-server-playtime-server',
  templateUrl: './page-server-playtime-server.component.html',
  styleUrls: ['./page-server-playtime-server.component.scss'],
})
export class PageServerPlaytimeServerComponent implements OnInit {

  server_name: string = "Blood Bound"

  constructor(private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    const heroId = this.route.snapshot.paramMap.get('id');
  }
}
