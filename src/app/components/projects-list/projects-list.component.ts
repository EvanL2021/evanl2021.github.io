
import { Component, inject, OnInit } from '@angular/core';
import { ProjetComponent } from 'components/projet/projet.component';
import { ProjetsService } from 'services/projets.service';

@Component({
    selector: 'app-projects-list',
    templateUrl: './projects-list.component.html',
    styleUrl: './projects-list.component.scss',
    imports: [ProjetComponent]
})
export class ProjectsListComponent implements OnInit {
  private projectService = inject(ProjetsService);

  categories: Array<string> = [];
  selectedCategory: string = 'Tous';

  ngOnInit() {
    this.categories = this.projectService.getLanguageTabs();
  };

  setActive(category: string) {
    this.selectedCategory = category;
  }

  getProjets() {
    return this.projectService.getProjects(this.selectedCategory);
  }
}
