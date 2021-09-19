import { Loader } from './loader.model';

export class LoaderAdd {
  static readonly desc = 'adding loader';
  static readonly type = '[Loader] Add';

  constructor(public payload: string[] | string) {}
}

export class LoaderProgress {
  static readonly desc = 'updating loader status';
  static readonly type = '[Loader] Progress';

  constructor(public payload: Loader.Progress) {}
}

export class LoaderRemove {
  static readonly desc = 'removing loader';
  static readonly type = '[Loader] Remove';

  constructor(public payload: string[] | string) {}
}
