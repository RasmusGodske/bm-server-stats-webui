export type ServerPlaytimeData = {
  server: {
    game_id: string;
    id: string;
    name: string;
  };
  unique_player_count: number;
  total_player_playtime: number;
  average_player_playtime: number;
  date: Date;
  hour: number;
}
