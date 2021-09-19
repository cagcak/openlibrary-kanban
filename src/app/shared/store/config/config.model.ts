import { StoreOptions } from '@ngxs/store/src/symbols';
import { environment } from 'src/environments/environment';
import { Environment } from '../../models/environment.model';

export namespace Config {
  export const NAME = 'ConfigState';
  export const DEFAULTS = environment as State;
  export const OPTIONS = { name: NAME, defaults: DEFAULTS } as StoreOptions<State>;

  export type State = {
    [key: string]: string;
  } & Environment;
}
