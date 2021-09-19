import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { RestService } from '@shared';
import { tap } from 'rxjs/operators';
import { BoardBooksByAuthor } from './board.actions';
import { Board } from './board.model';

@Injectable()
@State<Board.State>(Board.OPTIONS)
export class BoardState {
  constructor(private restService: RestService) {}

  @Selector()
  static book({ book }: Board.State): Board.Book {
    if (!book || !Array.isArray(book.docs)) return {} as Board.Book;

    const byLanguage = (doc: Board.Doc) => doc.language?.includes('eng');
    const byLatestYear = (a: Board.Doc, b: Board.Doc) =>
      new Date(a.first_publish_year).getFullYear() - new Date(b.first_publish_year).getFullYear();

    const docs = book.docs.filter(byLanguage).sort(byLatestYear);

    return { ...book, docs };
  }

  @Action(BoardBooksByAuthor)
  boardBooksByAuthor({ patchState }: StateContext<Board.State>, { payload }: BoardBooksByAuthor) {
    return this.restService.request<any, Board.Book>({ desc: BoardBooksByAuthor.desc, payload }).pipe(
      tap((book) => {
        patchState({ book });
      }),
    );
  }
}
