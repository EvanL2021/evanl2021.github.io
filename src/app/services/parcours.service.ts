import { Injectable } from '@angular/core';
import * as parcoursData from '../../assets/parcours.json';
import { Parcours } from 'interfaces/parcours';

@Injectable({
  providedIn: 'root'
})
export class ParcoursService {

  constructor() { }

  getParcours(): Parcours[] {
    return parcoursData as Parcours[];
  }
}
