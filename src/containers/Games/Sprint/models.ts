export interface SprintStatus {
  isSprint: boolean;
}

export interface SprintGameModeStatus {
  isGameMode: boolean;
}

export interface SprintGetScore {
  type: string;
  payload: number;
}

export interface SprintInitialScore {
  score: number;
}
