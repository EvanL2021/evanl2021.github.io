import { Component } from '@angular/core';
import { ButtonComponent } from 'components/button/button.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-presentation',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './presentation.component.html',
  styleUrl: './presentation.component.scss'
})
export class PresentationComponent {
  profileUrl: string = "assets/evan.jpg"
  
  constructor(private router: Router) {};

  downloadCV() {
    const link = document.createElement('a');
    link.href = 'assets/evan-labit-cv.pdf';
    link.download = 'evan-labit-cv.pdf';
    link.dispatchEvent(new MouseEvent('click', { bubbles: true, cancelable: true, view: window }));
    link.remove();
  }

  goToContact() {
    this.router.navigate(['/'], {fragment: "contact"})
  }
}