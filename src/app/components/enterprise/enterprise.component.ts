import { Component, input } from '@angular/core';
import { Parcours } from 'types/parcours';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-enterprise',
    imports: [CommonModule],
    templateUrl: './enterprise.component.html',
    styleUrl: './enterprise.component.scss'
})
export class EnterpriseComponent {
  readonly parcours = input.required<Parcours>();

  getTitle(): string {
    return this.parcours().title;
  }

  getSubTitle(): string {
    return this.parcours().subtitle;
  }

  getImgUrl(): string {
    return this.parcours().imgUrl;
  }

  getDate(): string {
    return this.parcours().date;
  }

  isJob(): boolean {
    return this.parcours().isJob;
  }
}
