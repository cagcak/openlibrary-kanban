import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxsRouterPluginModule } from '@ngxs/router-plugin';
import { NgxsModule } from '@ngxs/store';
import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BoardModule } from './board/board.module';
import { ConfigState, LoaderState, SharedModule } from './shared';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    BoardModule,
    NgxsModule.forRoot([LoaderState, ConfigState]),
    NgxsRouterPluginModule.forRoot(),
    ToastrModule.forRoot({ positionClass: 'toast-top-right', autoDismiss: true, progressBar: true }),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
