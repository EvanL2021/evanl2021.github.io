
import { Component, input, inject } from '@angular/core';
import { LanguageService } from 'services/language.service';
import { Projet } from 'types/projet';

@Component({
    selector: 'app-projet',
    imports: [],
    templateUrl: './projet.component.html',
    styleUrl: './projet.component.scss'
})
export class ProjetComponent {
  private languageService = inject(LanguageService);

  readonly projet = input.required<Projet>();;

  openProject() {
    window.open(this.projet().projectUrl);
  }

  getImgUrl(language: string) {
    return this.languageService.getLanguageUrl(language);
  }
}