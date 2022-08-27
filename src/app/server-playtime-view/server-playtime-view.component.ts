import { Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ServerFilter } from 'src/app/server-playtime-view/components/datetime-filter/datetime-filter.component';
import { ServerPlaytimeData } from 'src/app/models/ServerPlaytimeData.';
import { ServerService } from 'src/app/services/server.service';
import * as moment from 'moment';

export interface ServerTableData {
  index: number;
  name: string;
  average_playtime: number;
  unique_players: number;
}


@Component({
  selector: 'app-server-playtime-view',
  templateUrl: './server-playtime-view.component.html',
  styleUrls: ['./server-playtime-view.component.scss'],
})
export class ServerPlaytimeViewComponent implements OnInit {
  displayedColumns: string[] = ['index', 'name', 'average_playtime', 'unique_players'];
  dataSource = [];

  isLoading: boolean = false;

  startDate = new Date();
  selectedDate: Date | null = new Date();

  servers: Observable<ServerTableData[]>;

  minPlayers: number = 0;

  constructor(private configService: ServerService) {
    this.servers = this.configService.ServerPlaytimeData.pipe(
      map((server_playtime_data_list: ServerPlaytimeData[]) => {
        return server_playtime_data_list.map(
          (server_playtime_data, index) => {
            return {
              index: index + 1,
              name: server_playtime_data.server.name,
              average_playtime: server_playtime_data.average_player_playtime,
              unique_players: server_playtime_data.unique_player_count,
            };
        });
      })
    );

    this.configService.IsLoading.subscribe((is_loading) => {
      this.isLoading = is_loading;
    });

    this.configService.updateServerPlaytimeData(
      {
        date: moment(new Date()).utc(),
        hour: moment(new Date()).utc().hours(),
        min_players: 0,
      }
    );
  }

  ngOnInit(): void {

  }

  async filterUpdated(filter: ServerFilter) {
    console.log(filter);

    const ServerPlaytimeDataObservable = this.configService.updateServerPlaytimeData(
      {
        date: filter.selectedDate,
        hour: filter.selectedHour,
        min_players: filter.minPlayers || 0,
      }
    );

    console.log(ServerPlaytimeDataObservable);
  }

}
