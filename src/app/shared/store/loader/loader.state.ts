import { Injectable } from '@angular/core';
import { Action, createSelector, Selector, State, StateContext } from '@ngxs/store';
import { LoaderAdd, LoaderProgress, LoaderRemove } from './loader.actions';
import { Loader } from './loader.model';
import { ArrayUtils } from '../../utils/array.utils';

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

  static getProgress(item: Loader.Progress) {
    return createSelector([LoaderState], ({ progress }: Loader.State) => progress.find(({ id }) => id === item.id));
  }

  @Action(LoaderAdd)
  addItem({ getState, patchState }: StateContext<Loader.State>, { payload }: LoaderAdd) {
    const { list } = getState();

    patchState({
      list: ArrayUtils.filterList(list, payload).concat(payload),
    });
  }

  @Action(LoaderProgress)
  progressItem({ getState, patchState }: StateContext<Loader.State>, { payload }: LoaderProgress) {
    const { progress } = getState();

    patchState({
      progress: progress.filter(({ id }) => id !== payload.id).concat(payload.status !== null ? payload : []),
    });
  }

  @Action(LoaderRemove)
  removeItem({ getState, patchState }: StateContext<Loader.State>, { payload }: LoaderRemove) {
    const { list } = getState();

    patchState({ list: ArrayUtils.filterList(list, payload) });
  }
}
