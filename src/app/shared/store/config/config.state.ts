import { Injectable } from '@angular/core';
import { createSelector, Selector, State } from '@ngxs/store';
import { Config } from './config.model';

@Injectable()
@State<Config.State>(Config.OPTIONS)
export class ConfigState {
  @Selector()
  static getAll(state: Config.State) {
    return state;
  }

  static getOne(key: string) {
    if (typeof key !== 'string') {
      throw new Error('The key should be a string.');
    }

    return createSelector([ConfigState], (state: Config.State) => state[key]);
  }
}
