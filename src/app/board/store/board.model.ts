import { StoreOptions } from '@ngxs/store/src/symbols';
import { Book } from '@shared';

export namespace Board {
  export const NAME = 'BoardState';
  export const DEFAULTS = {} as State;
  export const OPTIONS = { name: NAME, defaults: DEFAULTS } as StoreOptions<State>;

  export interface State {
    book: Book;
  }
}
