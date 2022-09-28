import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Candidate } from 'src/app/candidate';
import { CandidateService } from 'src/app/candidate.service';

// List view dummy showing all candidates assigned to me.
@Component({
    selector: 'my-processes',
    templateUrl: './my-processes.component.html'
})

export class MyProcessesComponent implements OnInit {
    candidates$: Observable<Candidate[]> | undefined;
    constructor(private candidateService: CandidateService) { }

    ngOnInit() {
        this.candidates$ = this.candidateService.getCandidates();
    }
}