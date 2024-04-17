import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {
  scrollTo(id: string) {
    const element: HTMLElement = document.getElementById(id) as HTMLElement;
    if (!element) return;

    element.scrollIntoView({ behavior: "smooth" });
  }
}
