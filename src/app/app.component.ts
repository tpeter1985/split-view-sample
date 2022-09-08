import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { SplitViewService } from './split-view.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private splitViewService: SplitViewService;
  private router: Router;
  private destroyed$ = new Subject();
  private currentRoute = '';

  constructor(splitViewService: SplitViewService, router: Router) {
    this.splitViewService = splitViewService;
    this.router = router;
  }

  ngOnInit() {
    this.router.events
      .pipe(takeUntil(this.destroyed$))
      .subscribe(event => {
        if (event instanceof NavigationEnd) {
          if (event){
            this.currentRoute = event.url ? event.url : '';
            console.log(`currentRoute: ${this.currentRoute}`);

            // This logic should not reside here, maybe in SplitViewService.
            // Just put here for simple example...
            if (!this.SplitActive && this.RouteForSplitViewAreaBGiven && this.SplitViewOrderedForward){
              this.changeOrder();
            }
            if (!this.SplitActive && this.RouteForSplitViewAreaAGiven && !this.SplitViewOrderedForward){
              this.changeOrder();
            }
          }
          // console.log('event:');
          // console.log(event);
        }
      });
  }

  ngOnDestroy() {
    this.destroyed$.next(null);
  }

  changeOrder() {
    this.splitViewService.orderedForward = !this.splitViewService.orderedForward;
  }

  get SplitViewOrderedForward() {
    return this.splitViewService.orderedForward;
  }

  get RouteForSplitViewAreaAGiven() {
    return this.currentRoute.includes('a:');
  }

  get RouteForSplitViewAreaBGiven() {
    return this.currentRoute.includes('b:');
  }

  get SplitActive() {
    return this.RouteForSplitViewAreaAGiven && this.RouteForSplitViewAreaBGiven;
  }
}
