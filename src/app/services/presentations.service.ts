import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Presentation } from '../features/dashboard/dashboard.component';

@Injectable({
    providedIn: 'root'
})
export class PresentationsService {

    constructor() {
    }

    public getPresentations(): Observable<Array<Presentation>> {
        return of([{
            title: 'Cypress',
            type: 'Presentation',
            duration: '1h',
            description: 'Cypress is a next generation front end testing tool built for the modern web. Cypress enables you to write all types of tests.',
            author: 'Livada Vlad',
            reason: 'Recently added Cypress on my current project, and I had the chance to implement the solution and add it to our CI/CD.'
        }]);
    }

    public savePresentation(presentation: Presentation): Observable<any> {
        return of(true);
    }
}
