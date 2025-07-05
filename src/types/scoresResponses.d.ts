interface Score {
  id: number;
  member: string;
  id_tournament: number;
  id_category: number;
  id_gym: number;
  gym: string;
  puntaje: number;
}
interface FilterScoresData {
  id_category: number;
  id_level: number;
  id_tournament: number;
  id_gym?: number;
}
interface GetScoresByLevelAndCategoryResponse {
  scores: Score[];
  message: string;
}
