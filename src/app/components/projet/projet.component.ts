import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { LanguageService } from 'services/language.service';
import { Projet } from 'types/projet';

@Component({
  selector: 'app-projet',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projet.component.html',
  styleUrl: './projet.component.scss'
})
export class ProjetComponent {
  @Input({required: true}) projet!: Projet;

  constructor(private languageService: LanguageService) { };

  openProject() {
    window.open(this.projet.projectUrl);
  }

  getImgUrl(language: string) {
    return this.languageService.getLanguageUrl(language);
  }
}