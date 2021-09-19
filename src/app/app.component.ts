import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Select } from '@ngxs/store';
import { LoaderState } from '@shared';
import { Observable } from 'rxjs';

@Component({
  selector: 'openlibrary-root',
  template: `
    <openlibrary-header></openlibrary-header>
    <router-outlet></router-outlet>
    <openlibrary-loader *ngIf="((loader$ | async)?.length || 0) > 1"></openlibrary-loader>
  `,
  styles: [
    `
      :host {
        background-color: #f4f4f4;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  @Select(LoaderState.getList)
  loader$: Observable<string[]>;
}
