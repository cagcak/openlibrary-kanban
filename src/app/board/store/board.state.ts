import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { Book, Doc, FilteredByYear, RestService } from '@shared';
import { ToastrService } from 'ngx-toastr';
import { tap } from 'rxjs/operators';
import { BoardBooksByAuthor } from './board.actions';
import { Board } from './board.model';

@Injectable()
@State<Board.State>(Board.OPTIONS)
export class BoardState {
  constructor(private restService: RestService, private toasterService: ToastrService) {}

  @Selector()
  static yearOfDocs({ book }: Board.State): FilteredByYear[] {
    if (!book || !Array.isArray(book.docs)) return [];

    const byLanguage = (doc: Doc) => doc.language?.includes('eng');
    const byLatestYear = (a: FilteredByYear, b: FilteredByYear) => a.year - b.year;

    const docs = book.docs.filter(byLanguage).map((doc) => ({
      year: doc.first_publish_year,
      books: book.docs.filter((item) => item.first_publish_year === doc.first_publish_year),
    }));

    return docs.sort(byLatestYear);
  }

  @Action(BoardBooksByAuthor)
  boardBooksByAuthor({ patchState, getState }: StateContext<Board.State>, { payload }: BoardBooksByAuthor) {
    const { book } = getState();

    const isCached = (book?.docs || []).some((doc) => doc.author_key.includes(payload.author));

    if (isCached) {
      this.toasterService.info('The books you try to search already exist', 'Search Ignored');

      return;
    }

    return this.restService
      .request<Book>({ desc: BoardBooksByAuthor.desc, payload, limit: 30 })
      .pipe(tap((book) => patchState({ book })));
  }
}
