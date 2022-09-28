import { Component } from '@angular/core';
import { SplitViewService } from './split-view/split-view.service';

// Contains the basic app layout showing:
// * navbar
// * split-view command center
// * split-view outlet
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Split-View-Sample';
  
  private splitViewService: SplitViewService;

  constructor(splitViewService: SplitViewService) {
    this.splitViewService = splitViewService;
  }

  getRouterLinkInputForActiveArea(route: string | any[]){
    return this.splitViewService.getRouterLinkInputForActiveArea(route);
  }

  routerLinkIsActive(routerLinks: string[]){
    return this.splitViewService.routerLinkIsActive(routerLinks);
  }
}
