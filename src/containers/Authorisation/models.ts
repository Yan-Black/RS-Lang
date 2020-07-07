export interface InitialStateAuth {
  token: string;
  refreshToken: string;
}

export interface ActionAuth {
  type: string;
  payload?: string;
}
