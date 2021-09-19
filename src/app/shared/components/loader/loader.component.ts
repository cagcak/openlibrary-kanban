import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'openlibrary-loader',
  template: `
    <ng-container *ngIf="isPageLoader; else inlineLoaderTemplate">
      <div class="fixed top-0 right-0 h-screen w-screen z-50 flex justify-center items-center">
        <div class="animate-spin border-b-2 border-t-2 h-32 rounded-full w-32 z-20"></div>
      </div>
      <div id="backdrop" class="absolute bg-black bottom-0 left-0 opacity-70 right-0 top-0"></div>
    </ng-container>
    <ng-template #inlineLoaderTemplate>
      <div class="flex justify-evenly w-28">
        <div class="animate-spin border-b-2 border-gray-900 border-t-2 h-6 rounded-full w-6"></div>
        <span>Loading</span>
      </div>
    </ng-template>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoaderComponent {
  @Input() isPageLoader = true;
}
