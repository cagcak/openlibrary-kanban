import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'openlibrary-kanban-group',
  templateUrl: './kanban-group.component.html',
  styleUrls: ['./kanban-group.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class KanbanGroupComponent {}
