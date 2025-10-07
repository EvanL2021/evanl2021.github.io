import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PresentationComponent } from './presentation/presentation.component';
import { CompetencesComponent } from './competences/competences.component';
import { ContactComponent } from './contact/contact.component';
import {} from '@angular/common/http';
import { ParcoursComponent } from './parcours/parcours.component';
import { ProjectsComponent } from './projects/projects.component';

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, HeaderComponent, FooterComponent, PresentationComponent, CompetencesComponent, ContactComponent,
        // TODO: `HttpClientModule` should not be imported into a component directly.
        // Please refactor the code to add `provideHttpClient()` call to the provider list in the
        // application bootstrap logic and remove the `HttpClientModule` import from this component.
        HttpClientModule, ParcoursComponent, ProjectsComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {
}
