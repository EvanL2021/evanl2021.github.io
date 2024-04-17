import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ProjetComponent } from 'components/projet/projet.component';
import { ProjetsService } from 'services/projets.service';

@Component({
    selector: 'app-projects-list',
    standalone: true,
    templateUrl: './projects-list.component.html',
    styleUrl: './projects-list.component.scss',
    imports: [CommonModule, ProjetComponent]
})
export class ProjectsListComponent {
  categories: Array<string>;
  selectedCategory: string = 'Tous';

  constructor(private projectService: ProjetsService) {
    this.categories = this.projectService.getLanguageTabs();
  };

  setActive(category: string) {
    this.selectedCategory = category;
  }

  getProjets() {
    return this.projectService.getProjects(this.selectedCategory);
  }
}
