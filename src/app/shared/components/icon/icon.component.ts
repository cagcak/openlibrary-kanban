import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'openlibrary-icon',
  template: `<img
    [ngClass]="iconClasses"
    [attr.src]="'assets/icons/' + icon + '.svg'"
    [style.minWidth.px]="24"
    alt="icon"
    height="24"
    width="24"
  /> `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconComponent {
  @Input()
  icon: string;

  get iconClasses() {
    switch (this.icon) {
      case 'chevron-right':
        return `duration-300 inset-0 transform transition`;

      default:
        return '';
    }
  }
}
