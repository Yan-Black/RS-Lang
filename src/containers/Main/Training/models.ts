import * as Models from 'models';

export namespace Payload {
  export interface SetDocumentTypes { }
}

export namespace Action {
  export interface ChangeSetting extends Models.Action<Payload.SetDocumentTypes> { }
}

export namespace ActionCreator {
  export type ChangeSetting = (payload: boolean) => Action.ChangeSetting;
}
