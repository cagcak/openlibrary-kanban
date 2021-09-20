import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FilteredByYear } from '../../models/book.model';

@Component({
  selector: 'openlibrary-kanban-group',
  templateUrl: './kanban-group.component.html',
  styles: [
    `
      .kanban-group-container {
        min-width: 320px;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class KanbanGroupComponent {
  @Input()
  doc: FilteredByYear;

  trackByFn = (index: number, item: any) => index || item;

  get boardGroupClasses() {
    const colors = ['yellow', 'indigo', 'blue', 'pink', 'gray', 'green'];
    const randomColorName = colors[Math.floor(Math.random() * colors.length)];

    return `border-${randomColorName}-200 border-t-8 flex flex-shrink-0 h-10 items-center px-2`;
  }
}
