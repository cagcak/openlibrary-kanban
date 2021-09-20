export class LoaderAdd {
  static readonly desc = 'adding loader';
  static readonly type = '[Loader] Add';

  constructor(public payload: string[] | string) {}
}

export class LoaderRemove {
  static readonly desc = 'removing loader';
  static readonly type = '[Loader] Remove';

  constructor(public payload: string[] | string) {}
}
