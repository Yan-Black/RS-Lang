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

export interface InitialStateLogForm {
  logOpen: boolean;
}

export interface InitialStateRegForm {
  regOpen: boolean;
}

export interface ActionUserName {
  type: string;
  payload: string;
}
export interface ActionAuth {
  type: string;
  payload?: string;
}
