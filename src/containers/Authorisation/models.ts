export interface InitialStateAuth {
  currentUser: string;
}

export interface InitialStateApiErrors {
  error: string;
}

export interface InitialStateLog {
  isLogged: boolean;
}

export interface InitialStateUserName {
  name: string;
}

export interface ActionUserName {
  type: string;
  payload: string;
}
export interface ActionAuth {
  type: string;
  payload?: string;
}
