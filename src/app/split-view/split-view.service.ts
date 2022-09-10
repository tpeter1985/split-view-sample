import { Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter, map, Subject, takeUntil } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SplitViewService {
  private orderedForward = true;

  private router: Router;
  private destroyed$ = new Subject();
  private currentRoute = '';
  private activeSide: '' | 'left' | 'right' = '';

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


        // Maintain active side state

        // Clear if set but Split is off
        if (!this.SplitModeOn && this.activeSide !== ''){
          this.activeSide = '';
        
        // Set to left if not set but Split is on
        } else if (this.SplitModeOn && this.activeSide == '') {
          this.activeSide = 'left';
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

  get ActiveSide() {
    return this.activeSide;
  }

  get ActiveArea(): '' | 'a' | 'b' {
    if (!this.AreaAVisible && !this.AreaBVisible){
      return '';
    }
    if (this.SplitModeOn){
      if (this.OrderedForward){
        if (this.ActiveSide === 'left'){
          return 'a';
        } else {
          return 'b';
        }
      } else {
        if (this.ActiveSide === 'right'){
          return 'a';
        } else {
          return 'b';
        }
      }
    } else {
      if (this.AreaAVisible){
        return 'a';
      } else {
        return 'b';
      }
    }
  }

  getRouterLinkInputForActiveArea(route: string | any[]){
    return ['', { outlets: this.getRouterLinkOutlets(route) }];
  }

  private getRouterLinkOutlets(route: string | any[]){
    const activeArea = this.ActiveArea;
    if (activeArea === 'a'){
      return {
        a: route
      };
    } else if (activeArea === 'b'){
      return {
        b: route
      }
    }
    // No split area currently active?
    // Return left area route.
    if (this.OrderedForward){
      return {
        a: route
      };
    } else {
      return {
        b: route
      };
    }
  }

  activate(side: 'left' | 'right'){
    if (!this.SplitModeOn){
      throw new Error('Activate cannot be calle with split mode turned off.');
    }
    this.activeSide = side;
  }

  turnSplitModeOn(){
    if (this.SplitModeOn){
      return;
    }
    if (this.ActiveArea === 'a'){
      this.router.navigate(['', { outlets: { b: ['empty'] } }]);
    } else {
      this.router.navigate(['', { outlets: { a: ['empty'] } }]);
    }
  }

  turnSplitModeOff(){
    if (!this.SplitModeOn){
      return;
    }
    if (this.ActiveArea === 'a'){
      this.router.navigate(['', { outlets: { b: [] } }]);
    } else {
      this.router.navigate(['', { outlets: { a: [] } }]);
    }
  }

  ngOnDestroy() {
    this.destroyed$.next(true);
  }
}