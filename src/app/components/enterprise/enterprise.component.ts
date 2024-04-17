import { Component, Input } from '@angular/core';
import { Parcours } from 'types/parcours';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-enterprise',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './enterprise.component.html',
  styleUrl: './enterprise.component.scss'
})
export class EnterpriseComponent {
  @Input({required: true}) parcours!: Parcours;

  getTitle(): string {
    return this.parcours.title;
  }

  getSubTitle(): string {
    return this.parcours.subtitle;
  }

  getImgUrl(): string {
    return this.parcours.imgUrl;
  }

  getDate(): string {
    return this.parcours.date;
  }

  isJob(): boolean {
    return this.parcours.isJob;
  }
}
