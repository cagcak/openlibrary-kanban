import { animate, AUTO_STYLE, state, style, transition, trigger } from '@angular/animations';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Doc } from '../../models/book.model';

@Component({
  selector: 'openlibrary-kanban-card',
  templateUrl: './kanban-card.component.html',
  styles: [
    `
      .card-container {
        background-color: #f4f4f4;
      }
      .collapsible {
        overflow: hidden;
      }
    `,
  ],
  animations: [
    trigger('collapse', [
      state('false', style({ height: AUTO_STYLE, visibility: AUTO_STYLE })),
      state('true', style({ height: '0', visibility: 'hidden' })),
      transition('false => true', animate(300 + 'ms ease-in')),
      transition('true => false', animate(300 + 'ms ease-out')),
    ]),
    trigger('rotate', [
      state('false', style({ transform: 'rotate(0)' })),
      state('true', style({ transform: 'rotate(90deg)' })),
      transition('false => true', animate('400ms ease-out')),
      transition('true => false', animate('400ms ease-in')),
    ]),
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class KanbanCardComponent {
  @Input()
  book: Doc;

  isCollapsed = false;

  constructor() {}

  get contenClasses() {
    return `card-body collapsible ${this.isCollapsed ? 'collapsed' : ''}`;
  }
}
