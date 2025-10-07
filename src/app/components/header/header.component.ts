import { Component, inject } from '@angular/core';
import { ButtonComponent } from 'components/button/button.component';
import { ViewportScroller } from "@angular/common";
import { ScrollService } from 'services/scroll.service';

@Component({
    selector: 'app-header',
    imports: [ButtonComponent],
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss'
})
export class HeaderComponent {
  private scroller = inject(ScrollService);
;

  goTo(section: string) {
    this.scroller.scrollTo(section);
  }
}
