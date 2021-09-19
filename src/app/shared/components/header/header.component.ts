import { Component } from '@angular/core';

@Component({
  selector: 'openlibrary-header',
  template: `<div class="app-header fixed m-auto p-6 w-screen">
    <img src="assets/logo.png" alt="logo" class="mx-auto" />
  </div> `,
  styles: [
    `
      .app-header {
        background-color: #f4f4f4;
      }
    `,
  ],
})
export class HeaderComponent {}
