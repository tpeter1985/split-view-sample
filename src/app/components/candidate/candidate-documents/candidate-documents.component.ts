import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Candidate } from 'src/app/candidate';
import { CandidateService } from 'src/app/candidate.service';
import { RoutingExtensionService } from 'src/app/routing-extension.service';

// Dummy component representing the candidate's document view.
// Implements data-binding as well as retrieving a matrix Url
// parameter initially passed to the parent component.
@Component({
    selector: 'candidate-documents',
    templateUrl: 'candidate-documents.component.html'
})

export class CandidateDocumentsComponent implements OnInit {
    candidateId = 0;
    candidate$: Observable<Candidate> | null = null;

    constructor(
        private route: ActivatedRoute,
        private candidateService: CandidateService,
        private routingExtensionService: RoutingExtensionService
    ) { }

    ngOnInit() {
        this.candidateId = Number(this.routingExtensionService.getParam('id', this.route));
        this.candidate$ = this.candidateService.getCandidate(this.candidateId);
    }
}