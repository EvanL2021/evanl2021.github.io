import { Component, inject, OnInit } from '@angular/core';

import { SkillsShowerComponent } from 'components/skills-shower/skills-shower.component';
import { LanguageService } from 'services/language.service';

@Component({
    selector: 'app-skills-list',
    imports: [SkillsShowerComponent],
    templateUrl: './skills-list.component.html',
    styleUrl: './skills-list.component.scss'
})
export class SkillsListComponent implements OnInit {
  private languageService = inject(LanguageService);

  categories: Array<string> = [];
  selectedCategory: string = 'Tous';

  ngOnInit() {
    this.categories = this.languageService.getLanguageTabs();
  };

  setActive(category: string) {
    this.selectedCategory = category;
  }
}
