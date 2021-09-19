import { Component } from '@angular/core';

@Component({
  selector: 'openlibrary-error',
  template: `<div class="error-container flex flex-col items-center pt-52">
    <img class="m-auto w-80" src="assets/no-item.png" alt="No Item Found" />
    <h2 class="py-20 text-4xl">There is no board to show</h2>
  </div>`,
})
export class ErrorComponent {}
