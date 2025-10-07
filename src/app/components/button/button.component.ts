import { Component, Input, output, input } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
    selector: 'app-button',
    imports: [MatButtonModule, MatIconModule],
    templateUrl: './button.component.html',
    styleUrl: './button.component.scss'
})
export class ButtonComponent {
  readonly text = input.required<string>();
  readonly icon = input<string>();
  readonly outlined = input(false);
  readonly doClick = output();

  onClick(): void {
    this.doClick.emit();
  }
}
