import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { MyDocument } from './my-document';

// Mocked data returned by the service.
const documentOne = {
    id: 1,
    fileName: 'ABC.pdf'
} as MyDocument;

const documentTwo = {
    id: 2,
    fileName: 'DEF.pdf'
} as MyDocument;

const documentThree = {
    id: 3,
    fileName: 'GHI.pdf'
} as MyDocument;


// Mocked "http client" service class.
@Injectable({
    providedIn: 'root',
  })
export class MyDocumentService {
  getDocuments(): Observable<MyDocument[]>{
    return of([documentOne, documentTwo, documentThree]);
  }
  getDocument(id: number): Observable<MyDocument> | null{
    switch (id){
        case 1:
            return of(documentOne);
        case 2:
            return of(documentTwo);
        case 3:
            return of(documentThree);
        default:
            return null;
    }
  }
}