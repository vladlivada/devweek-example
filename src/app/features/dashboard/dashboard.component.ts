import { Component, OnInit } from '@angular/core';
import { PresentationsService } from '../../services/presentations.service';

export interface Presentation {
    title: string;
    type: string;
    duration: string;
    description: string;
    author: string;
    reason: string;
}

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
    tableData: Array<Presentation>;
    displayedColumns: string[] = ['title', 'type', 'duration', 'description', 'author', 'reason'];

    constructor(private presentationsService: PresentationsService) {
        presentationsService.getPresentations().subscribe((presentations: Array<Presentation>) => {
            this.tableData = presentations;
        });
    }

    ngOnInit(): void {
    }

}
