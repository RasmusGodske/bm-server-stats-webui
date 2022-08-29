import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, firstValueFrom, Observable, throwError } from 'rxjs';
import { catchError, map, retry } from 'rxjs/operators';
import { ServerPlaytimeData } from '../models/ServerPlaytimeData';
import { environment } from 'src/environments/environment';

import * as moment from 'moment';

interface ServerPlayTimeResponse {
  success: boolean;
  errors: string[];
  query_time: number;
  data: {
    server_playtimes: ServerPlaytimeData[];
  };
}

interface ServerPlayTimeQueryOptions {
  date: moment.Moment,
  hour: number,
  min_players: number,
}


@Injectable({
  providedIn: 'root',
})
export class ServerService {

  private baseUrl: string = environment.apiUrl;

  private _serverPlaytimeData = new BehaviorSubject<ServerPlaytimeData[]>([]);
  public ServerPlaytimeData = this._serverPlaytimeData.asObservable();

  private _is_loading = new BehaviorSubject<boolean>(false);
  public IsLoading = this._is_loading.asObservable();

  constructor(private http: HttpClient, private datepipe: DatePipe) {

  }

  async fetchServerPlaytimeData(options: ServerPlayTimeQueryOptions): Promise<ServerPlaytimeData[]> {
    const url: string = `${this.baseUrl}/server_playtimes/`;

    const params = {
      date: options.date.format('YYYY-MM-DD'),
      hour: options.hour,
    };
    const response = this.http
      .get<ServerPlayTimeResponse>(
        url,
        {
          params: params,
        }
      )
      .pipe(
        map(response => response.data.server_playtimes),
        retry(1),
        catchError(this.handleError)
      );

    this._is_loading.next(true);
    const result = await firstValueFrom(response);
    this._is_loading.next(false);

    return result;
  }

  updateServerPlaytimeData(options: ServerPlayTimeQueryOptions) {
    this.fetchServerPlaytimeData(options).then(
      (server_playtime_data_list: ServerPlaytimeData[]) => {
        let serverList = server_playtime_data_list;
        let newList = serverList.filter((server) => {
          return server.unique_player_count >= options.min_players;
        });

        this._serverPlaytimeData.next(newList);
      }
    );
  }


  handleError(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    console.warn(errorMessage);
    return throwError(errorMessage);
  }
}
