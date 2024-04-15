import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillsShowerComponent } from 'components/skills-shower/skills-shower.component';
import { LanguageService } from 'services/language.service';

@Component({
  selector: 'app-skills-list',
  standalone: true,
  imports: [CommonModule, SkillsShowerComponent],
  templateUrl: './skills-list.component.html',
  styleUrl: './skills-list.component.scss'
})
export class SkillsListComponent {
  categories: Array<string>;
  selectedCategory: string = 'Tous';

  constructor(private languageService: LanguageService) {
    this.categories = this.languageService.getLanguageTabs();
  };

  setActive(category: string) {
    this.selectedCategory = category;
  }
}
