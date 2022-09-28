import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { Candidate } from './candidate';

// Mocked data returned by the service.
const candidateOne = {
    id: 1,
    firstName: 'Mike',
    lastName: 'Music'
} as Candidate;

const candidateTwo = {
    id: 2,
    firstName: 'Harry',
    lastName: 'Hammer'
} as Candidate;

const candidateThree = {
    id: 3,
    firstName: 'Ronny',
    lastName: 'Rich'
} as Candidate;


// Mocked "http client" service class.
@Injectable({
    providedIn: 'root',
  })
export class CandidateService {
  getCandidates(): Observable<Candidate[]>{
    return of([candidateOne, candidateTwo, candidateThree]);
  }
  getCandidate(id: number): Observable<Candidate> | null{
    switch (id){
        case 1:
            return of(candidateOne);
        case 2:
            return of(candidateTwo);
        case 3:
            return of(candidateThree);
        default:
            return null;
    }
  }
}