import { StoreOptions } from '@ngxs/store/src/symbols';

export namespace Loader {
  export const NAME = 'LoaderState';
  export const DEFAULTS = { list: [], progress: [] } as State;
  export const OPTIONS = { name: NAME, defaults: DEFAULTS } as StoreOptions<State>;

  export interface State {
    list: string[];
  }
}
