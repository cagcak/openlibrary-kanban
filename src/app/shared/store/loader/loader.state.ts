import { Injectable } from '@angular/core';
import { Action, createSelector, Selector, State, StateContext } from '@ngxs/store';
import { ArrayUtils } from '../../utils/array.utils';
import { LoaderAdd, LoaderRemove } from './loader.actions';
import { Loader } from './loader.model';

@Injectable()
@State<Loader.State>(Loader.OPTIONS)
export class LoaderState {
  @Selector()
  static getList({ list }: Loader.State) {
    return list;
  }

  static getAny(items: string[]) {
    return createSelector([LoaderState], ({ list }: Loader.State) => !!list.find((key) => items.indexOf(key) >= 0));
  }

  @Action(LoaderAdd)
  addItem({ getState, patchState }: StateContext<Loader.State>, { payload }: LoaderAdd) {
    const { list } = getState();

    patchState({
      list: ArrayUtils.filterList(list, payload).concat(payload),
    });
  }

  @Action(LoaderRemove)
  removeItem({ getState, patchState }: StateContext<Loader.State>, { payload }: LoaderRemove) {
    const { list } = getState();

    patchState({ list: ArrayUtils.filterList(list, payload) });
  }
}
