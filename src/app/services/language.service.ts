import { Injectable } from '@angular/core';
import { Languages } from 'enums/languages';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  languages: {[key: string]: string[]} = {
    "Tous": Object.keys(Languages),
    "Frontend": ["Javascript", "Typescript", "JQuery", "HTML", "CSS", "React", "VueJS", "Angular"],
    "Mobile": ["ReactNative", "Flutter"],
    "Backend": ["Javascript", "Typescript", "Spring", "PHP", "NodeJS", "BunJS"],
    "Base de données": ["MongoDB", "MySQL", "PostgresQL"],
    "Divers": ["AWS", "Docker", "Github", "Notion"],
  }

  constructor() { };

  getLanguageTabs(): Array<string> {
    return Object.keys(this.languages);
  }

  getLanguages(category: string): Array<string> {
    return this.languages[category];
  }

  getLanguageUrl(language: string = ""): string {
    return Languages[language as keyof typeof Languages];
  }
}
