import { Injectable } from '@angular/core';
import { SplitViewArea } from './split-view-area';

@Injectable({
  providedIn: 'root',
})
export class SplitViewService {
  orderedForward = true;

  areas: SplitViewArea[] = [
    {
        Name: 'A',
        Index: 0
    },
    {
        Name: 'B',
        Index: 1
    }
  ];

  constructor() { }

}