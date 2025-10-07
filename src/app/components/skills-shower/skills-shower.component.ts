import { Component, OnChanges, SimpleChanges, input, inject } from '@angular/core';

import { LanguageService } from 'services/language.service';

@Component({
    selector: 'app-skills-shower',
    imports: [],
    templateUrl: './skills-shower.component.html',
    styleUrl: './skills-shower.component.scss'
})
export class SkillsShowerComponent implements OnChanges {
  private languageService = inject(LanguageService);

  readonly category = input.required<string>();
  languages: Array<string> = [];;

  toUrl(language: string) {
    return this.languageService.getLanguageUrl(language);
  }

  ngOnChanges(changes: SimpleChanges) {
    this.languages = this.languageService.getLanguages(this.category());
  }
}