import { Component, OnInit } from '@angular/core';
import { EnterpriseComponent } from 'components/enterprise/enterprise.component';
import { Parcours } from 'types/parcours';
import { ParcoursService } from 'services/parcours.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-parcours',
  standalone: true,
  imports: [EnterpriseComponent, CommonModule],
  templateUrl: './parcours.component.html',
  styleUrl: './parcours.component.scss'
})
export class ParcoursComponent implements OnInit {
  parcours: Parcours[] = [];
  constructor(private parcoursService: ParcoursService) {};

  ngOnInit() {
    this.parcours = this.parcoursService.getParcours();
  }

  getParcoursCell(parcours: Parcours, parcoursId: number): {'grid-column': number; 'grid-row': number} {
    return {
      'grid-column': parcours.isJob ? 2 : 1,
      'grid-row': parcoursId + 1
    };
  }
}
