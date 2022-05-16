import { Component, Input } from '@angular/core';

@Component({
  selector: 'os-spinner-overlay',
  templateUrl: './spinner-overlay.component.html',
  styleUrls: ['./spinner-overlay.component.scss'],
})
export class SpinnerOverlayComponent {
  @Input() show: boolean | null = null;
}
