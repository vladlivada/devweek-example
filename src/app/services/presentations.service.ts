import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Presentation } from '../features/dashboard/dashboard.component';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class PresentationsService {

    constructor(private http: HttpClient) {
    }

    public getPresentations(): Observable<Array<Presentation>> {
        // return of([]);
        return this.http.get<Array<Presentation>>('/api/presentations');
    }

    public savePresentation(presentation: Presentation): Observable<any> {
        // return of(true);
        return this.http.post('/api/presentation', presentation);
    }
}
