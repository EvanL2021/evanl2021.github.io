import { Component } from '@angular/core';
import { ButtonComponent } from 'components/button/button.component';
import { ViewportScroller } from "@angular/common";
import { ScrollService } from 'services/scroll.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  constructor(private scroller: ScrollService) {};

  goTo(section: string) {
    this.scroller.scrollTo(section);
  }
}
