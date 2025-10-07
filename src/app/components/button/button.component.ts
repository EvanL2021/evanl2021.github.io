import { Component, EventEmitter, Input, Output } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
    selector: 'app-button',
    imports: [MatButtonModule, MatIconModule],
    templateUrl: './button.component.html',
    styleUrl: './button.component.scss'
})
export class ButtonComponent {
  @Input({required: true}) text!: string;
  @Input({required: false}) icon!: string;
  @Input({required: false}) outlined!: string;
  @Output() doClick: EventEmitter<any> = new EventEmitter();

  onClick(): void {
    this.doClick.emit();
  }
}
