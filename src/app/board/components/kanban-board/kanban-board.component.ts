import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { FilteredByYear, LoaderState } from '@shared';
import { Observable } from 'rxjs';
import { BoardBooksByAuthor } from '../../store/board.actions';
import { BoardState } from '../../store/board.state';

@Component({
  selector: 'openlibrary-kanban-board',
  templateUrl: './kanban-board.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class KanbanBoardComponent {
  @Select(LoaderState.getAny([BoardBooksByAuthor.desc]))
  loader$: Observable<boolean>;

  @Select(BoardState.yearOfDocs)
  yearOfDocs$: Observable<FilteredByYear[]>;

  trackByFn = (index: number, item: any) => index || item;

  constructor(private store: Store) {}

  searchBook(author: string) {
    this.store.dispatch(new BoardBooksByAuthor({ author }));
  }
}
