import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Candidate } from 'src/app/candidate';
import { CandidateService } from 'src/app/candidate.service';

// List view dummy showing all new candidates.
@Component({
    selector: 'new-candidates',
    templateUrl: './new-candidates.component.html'
})

export class NewCandidatesComponent implements OnInit {
    candidates$: Observable<Candidate[]> | undefined;
    constructor(private candidateService: CandidateService) { }

    ngOnInit() {
        this.candidates$ = this.candidateService.getCandidates();
    }
}