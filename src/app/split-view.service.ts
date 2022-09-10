import { Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter, map, Subject, takeUntil } from 'rxjs';
import { SplitViewArea } from './split-view-area';

@Injectable({
  providedIn: 'root',
})
export class SplitViewService {
  private orderedForward = true;

  private router: Router;
  private destroyed$ = new Subject();
  private currentRoute = '';

  constructor(router: Router) {
    this.router = router;
    this.init();
  }

  private init() {
    this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd),
        map(event => event as NavigationEnd),
        takeUntil(this.destroyed$)
      )
      .subscribe(event => {
        // Store current route
        this.currentRoute = event.url ? event.url : '';

        // If B is the only active element set reverse order (if not already done).
        if (!this.SplitModeOn && this.AreaBVisible && this.orderedForward) {
          this.changeOrder();
        }

        // If A is the only active element set forward order (if not already done).
        if (!this.SplitModeOn && this.AreaAVisible && !this.orderedForward) {
          this.changeOrder();
        }
      });
  }

  changeOrder() {
    this.orderedForward = !this.orderedForward;
  }

  get OrderedForward() {
    return this.orderedForward;
  }

  get AreaAVisible() {
    return this.currentRoute.includes('a:');
  }

  get AreaBVisible() {
    return this.currentRoute.includes('b:');
  }

  get SplitModeOn() {
    return this.AreaAVisible && this.AreaBVisible;
  }

  ngOnDestroy() {
    this.destroyed$.next(true);
  }
}