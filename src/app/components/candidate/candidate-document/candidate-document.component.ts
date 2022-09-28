import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { MyDocument } from 'src/app/my-document';
import { MyDocumentService } from 'src/app/my-document.service';
import { RoutingExtensionService } from 'src/app/routing-extension.service';

// Dummy component showing the content of a file.
// Implements data-binding as well as retrieving a Url parameter.
@Component({
    selector: 'candidate-document',
    templateUrl: 'candidate-document.component.html'
})
export class CandidateDocumentComponent implements OnInit {
    documentId = 0;
    document$: Observable<MyDocument> | null = null;
    constructor(
        private myDocumentService: MyDocumentService,
        private route: ActivatedRoute
    ) { }

    ngOnInit() {
        this.route.params.subscribe(parameter => {
            this.documentId = Number(parameter['id']);
            this.document$ = this.myDocumentService.getDocument(this.documentId);
        })
    }
}