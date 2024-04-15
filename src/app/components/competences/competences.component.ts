import { Component } from '@angular/core';
import { SkillsListComponent } from 'components/skills-list/skills-list.component';

@Component({
  selector: 'app-competences',
  standalone: true,
  imports: [SkillsListComponent],
  templateUrl: './competences.component.html',
  styleUrl: './competences.component.scss'
})
export class CompetencesComponent {

}
