import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from 'services/language.service';

@Component({
  selector: 'app-skills-shower',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills-shower.component.html',
  styleUrl: './skills-shower.component.scss'
})
export class SkillsShowerComponent implements OnInit {
  @Input({required: true}) category!: string;
  languages: Array<string> = [];

  constructor(private languageService: LanguageService) {};

  ngOnInit(): void {
    this.languages = this.languageService.getLanguages(this.category);
  }
}