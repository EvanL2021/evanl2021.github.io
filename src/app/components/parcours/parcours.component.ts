import { Component, OnInit } from '@angular/core';
import { Parcours } from 'interfaces/parcours';
import { ParcoursService } from 'services/parcours.service';

@Component({
  selector: 'app-parcours',
  standalone: true,
  imports: [],
  templateUrl: './parcours.component.html',
  styleUrl: './parcours.component.scss'
})
export class ParcoursComponent implements OnInit {
  parcours: Parcours[] = [];
  constructor(private parcoursService: ParcoursService) {};

  ngOnInit() {
    this.parcours = this.parcoursService.getParcours();
  }
}
