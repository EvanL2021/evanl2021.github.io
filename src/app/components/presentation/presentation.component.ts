import { Component } from '@angular/core';
import { ButtonComponent } from 'components/button/button.component';
import { ScrollService } from 'services/scroll.service';

@Component({
  selector: 'app-presentation',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './presentation.component.html',
  styleUrl: './presentation.component.scss'
})
export class PresentationComponent {
  profileUrl: string = "assets/evan.jpg"
  
  constructor(private scroller: ScrollService) {};

  downloadCV() {
    const link = document.createElement('a');
    link.href = 'assets/evan-labit-cv.pdf';
    link.download = 'evan-labit-cv.pdf';
    link.dispatchEvent(new MouseEvent('click', { bubbles: true, cancelable: true, view: window }));
    link.remove();
  }

  goToContact() {
    this.scroller.scrollTo("contact");
  }
}