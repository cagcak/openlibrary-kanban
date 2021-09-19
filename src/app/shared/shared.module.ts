import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  LoaderComponent,
  ErrorComponent,
  HeaderComponent,
  KanbanCardComponent,
  KanbanGroupComponent,
  IconComponent,
} from './components';

const COMPONENTS = [
  KanbanGroupComponent,
  KanbanCardComponent,
  HeaderComponent,
  ErrorComponent,
  IconComponent,
  LoaderComponent,
];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [CommonModule],
  exports: [...COMPONENTS, CommonModule],
})
export class SharedModule {}
