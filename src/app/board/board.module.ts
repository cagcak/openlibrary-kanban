import { NgModule } from '@angular/core';
import { BoardRoutingModule } from './board-routing.module';
import { KanbanBoardComponent } from './components';
import { SharedModule } from '@shared';
import { NgxsModule } from '@ngxs/store';
import { BoardState } from './store/board.state';

@NgModule({
  declarations: [KanbanBoardComponent],
  imports: [SharedModule, BoardRoutingModule, NgxsModule.forFeature([BoardState])],
})
export class BoardModule {}
