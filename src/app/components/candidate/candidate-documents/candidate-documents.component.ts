import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Candidate } from 'src/app/candidate';
import { CandidateService } from 'src/app/candidate.service';
import { MyDocument } from 'src/app/my-document';
import { MyDocumentService } from 'src/app/my-document.service';
import { RoutingExtensionService } from 'src/app/routing-extension.service';
import { SplitViewService } from 'src/app/split-view/split-view.service';

// Dummy component representing the candidate's document view.
// Implements data-binding as well as retrieving a matrix Url
// parameter initially passed to the parent component.
// Also implements opening a component in the opposite Split-View area.
@Component({
    selector: 'candidate-documents',
    templateUrl: 'candidate-documents.component.html'
})

export class CandidateDocumentsComponent implements OnInit {
    candidateId = 0;
    candidate$: Observable<Candidate> | null = null;
    documents$: Observable<MyDocument[]> | undefined;

    constructor(
        private route: ActivatedRoute,
        private candidateService: CandidateService,
        private myDocumentService: MyDocumentService,
        private routingExtensionService: RoutingExtensionService,
        private splitViewService: SplitViewService,
    ) { }

    ngOnInit() {
        this.route.params.subscribe(parameter => {
            this.candidateId = Number(this.routingExtensionService.getParam('id', this.route));
            this.candidate$ = this.candidateService.getCandidate(this.candidateId);
        });
        this.documents$ = this.myDocumentService.getDocuments();
    }

    getRouterLinkInputForOppositeArea(route: any[]){
        const oppositeArea = this.splitViewService.getOppositeAreaByActivatedRoute(this.route);
        if (oppositeArea == ''){
            return null;
        }
        return ['', { outlets: this.splitViewService.getRouterLinkOutletsForArea(route, oppositeArea) }];
    }
}