import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { LoaderState } from '@shared';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { BoardBooksByAuthor } from '../../store/board.actions';
import { Board } from '../../store/board.model';
import { BoardState } from '../../store/board.state';

@Component({
  selector: 'openlibrary-kanban-board',
  templateUrl: './kanban-board.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class KanbanBoardComponent implements OnInit {
  @Select(LoaderState.getAny([BoardBooksByAuthor.desc]))
  loader$: Observable<boolean>;

  @Select(BoardState.book)
  book$: Observable<Board.Book>;

  get docs() {
    return this.book$.pipe(map((book) => book?.docs));
  }

  constructor(private store: Store) {
    console.log();
  }

  ngOnInit() {
    console.log();
  }

  searchBook(author: string) {
    console.log(author);

    // return;

    this.store.dispatch(new BoardBooksByAuthor({ author }));
  }
}
