import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PresentationsService } from '../../services/presentations.service';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
    presentation: FormGroup;
    isLoading = false;

    constructor(private presentationsService: PresentationsService) {
        this.presentation = new FormGroup({
            title: new FormControl('', [Validators.required]),
            type: new FormControl('', [Validators.required]),
            duration: new FormControl('', [Validators.required]),
            description: new FormControl('', [Validators.required]),
            author: new FormControl('', [Validators.required]),
            reason: new FormControl('', [Validators.required])
        });
    }

    ngOnInit(): void {
    }

    public submitPresentation(): void {
        this.isLoading = true;
        this.presentationsService.savePresentation(this.presentation.value).subscribe(() => {
            this.isLoading = false;
        });
    }

}
