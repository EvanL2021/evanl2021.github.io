import { Injectable } from '@angular/core';
import { Languages } from 'enums/languages';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  languages: {[key: string]: string[]} = {
    "Tous": Object.keys(Languages).filter((language) => {return isNaN(Number(language));}),
    "Frontend": [Languages.Javascript, Languages.Typescript, Languages.JQuery, Languages.HTML, Languages.CSS, Languages.React, Languages.VueJS, Languages.Angular],
    "Mobile": [Languages.ReactNative, Languages.Flutter],
    "Backend": [Languages.Javascript, Languages.Typescript, Languages.Spring, Languages.PHP, Languages.NodeJS, Languages.BunJS],
    "Base de données": [Languages.MongoDB, Languages.MySQL, Languages.PostgresQL],
    "Divers": [Languages.AWS, Languages.Docker, Languages.Github],
  }

  constructor() {};

  getLanguageTabs(): Array<string> {
    return Object.keys(this.languages);
  }

  getLanguages(category: string): Array<string> {
    return this.languages[category];
  }
}
