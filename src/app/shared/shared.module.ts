import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import {
  ErrorComponent,
  HeaderComponent,
  IconComponent,
  KanbanCardComponent,
  KanbanGroupComponent,
  LoaderComponent,
} from './components';
import { JsonInterceptor } from './interceptors/json.interceptor';

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
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JsonInterceptor,
      multi: true,
    },
  ],
})
export class SharedModule {}
