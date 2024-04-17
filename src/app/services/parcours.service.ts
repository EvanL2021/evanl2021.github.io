import { Injectable } from '@angular/core';
import parcoursData from '../../assets/parcours.json';
import { Parcours } from 'types/parcours';

@Injectable({
  providedIn: 'root'
})
export class ParcoursService {

  constructor() { }

  getParcours(): Parcours[] {
    return parcoursData as Parcours[];
  }

  getParcoursCount(): number {
    return parcoursData.length;
  }
}
