import { Injectable, inject } from '@angular/core';
import projetsData from '../../assets/projets.json';
import { Projet } from 'types/projet';
import { Languages } from 'enums/languages';
import { LanguageService } from './language.service';

@Injectable({
  providedIn: 'root'
})
export class ProjetsService {
  private languageService = inject(LanguageService);

  projets: Projet[] = projetsData.map(projet => ({
    ...projet,
    languages: projet.languages.map(lang => lang as keyof typeof Languages)
  }));;

  getLanguageTabs(): Array<string> {
    return this.languageService.getLanguageTabs();
  }

  getProjects(tab: string): Projet[] {
    if (tab == "Tous") return this.projets;

    const languages = this.languageService.getLanguages(tab);

    return this.projets.filter((projet) => projet.languages.some(language => languages.includes(language)));
  }
}