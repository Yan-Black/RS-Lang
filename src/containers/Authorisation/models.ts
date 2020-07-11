export interface InitialStateAuth {
  currentUser: string;
}

export interface InitialStateApiErrors {
  error: string;
}

export interface InitialStateLog {
  isLogged: boolean;
}

export interface ActionAuth {
  type: string;
  payload?: string;
}
