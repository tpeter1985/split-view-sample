import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable, switchMap } from 'rxjs';
import { Candidate } from 'src/app/candidate';
import { CandidateService } from 'src/app/candidate.service';

// Component showing the candidate's name and all the sub-menu
// items you can open for a candidate:
// * Core data
// * Documents
// * Access rights
// Implements data-binding as well as retrieving a matrix Url parameter.
@Component({
    selector: 'candidate',
    templateUrl: './candidate.component.html'
})

export class CandidateComponent implements OnInit {
    candidateId = 0;
    candidate$: Observable<Candidate> | null = null;

    constructor(
        private route: ActivatedRoute,
        private candidateService: CandidateService
        ) { }

    ngOnInit() {
        this.route.params.subscribe(parameter => {
            this.candidateId = Number(parameter['id']);
            this.candidate$ = this.candidateService.getCandidate(this.candidateId);
        });
    }
}