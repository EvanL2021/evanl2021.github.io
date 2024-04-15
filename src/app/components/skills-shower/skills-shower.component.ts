import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from 'services/language.service';

@Component({
  selector: 'app-skills-shower',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills-shower.component.html',
  styleUrl: './skills-shower.component.scss'
})
export class SkillsShowerComponent implements OnChanges {
  @Input({required: true}) category!: string;
  languages: Array<string> = [];

  constructor(private languageService: LanguageService) {};

  toUrl(language: string) {
    return this.languageService.getLanguageUrl(language);
  }

  ngOnChanges(changes: SimpleChanges) {
    this.languages = this.languageService.getLanguages(this.category);
  }
}