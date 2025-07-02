interface Tournament {
  id: number;
  name: string;
  inscription_date_end: string;
  date_range: string;
}
interface CreateTournament {
  name: string;
  startDate: string;
  endDate: string;
}
interface GetTournamentsResponse {
  message: string;
  tournaments: Tournament[];
}
interface CreateTournamentResponse {
  message: string;
  tournament: Tournament;
}
