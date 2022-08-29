import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ServerFilter } from '../../components/datetime-filter/datetime-filter.component';
import { ServerService } from '../../services/server.service';
import * as moment from 'moment';
import { ServerPlaytimeData } from '../../models/ServerPlaytimeData';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

export interface ServerTableData {
  index: number;
  name: string;
  average_playtime: number;
  unique_players: number;
  server_id: string;
}


@Component({
  selector: 'app-page-server-playtime-servers',
  templateUrl: './page-server-playtime-servers.component.html',
  styleUrls: ['./page-server-playtime-servers.component.scss'],
})
export class PageServerPlaytimeServersComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['index', 'name', 'average_playtime', 'unique_players'];
  dataSource = [];

  isLoading: boolean = false;

  startDate = new Date();
  selectedDate: Date | null = new Date();

  serversDataSource = new MatTableDataSource<ServerTableData>([])

  @ViewChild(MatPaginator) paginator: MatPaginator | null = null;
  @ViewChild(MatSort) sort: MatSort | null = new MatSort();

  minPlayers: number = 0;

  constructor(private configService: ServerService) {


    this.configService.ServerPlaytimeData.pipe(
      map((server_playtime_data_list: ServerPlaytimeData[]) => {
        const data: ServerTableData[] = server_playtime_data_list.map(
          (server_playtime_data, index: number) => {
            const record: ServerTableData = {
              index: index + 1,
              name: server_playtime_data.server.name,
              average_playtime: server_playtime_data.average_player_playtime,
              unique_players: server_playtime_data.unique_player_count,
              server_id: server_playtime_data.server.id,
            }
            return record;
        });

        this.serversDataSource.data = data;
      })
    ).subscribe();

    this.configService.IsLoading.subscribe((is_loading) => {
      this.isLoading = is_loading;
    });

    this.configService.updateServerPlaytimeData(
      {
        date: moment(new Date()).utc(),
        hour: moment(new Date()).utc().hours() -1,
        min_players: 0,
      }
    );
  }

  ngOnInit(): void {

  }

  ngAfterViewInit() {
    this.serversDataSource.paginator = this.paginator;
    this.serversDataSource.sort = this.sort;
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
