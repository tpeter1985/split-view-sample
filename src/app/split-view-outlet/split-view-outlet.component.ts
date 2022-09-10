import { Component, OnInit } from '@angular/core';
import { SplitViewService } from '../split-view.service';

@Component({
  selector: 'split-view-outlet',
  templateUrl: './split-view-outlet.component.html',
  styleUrls: ['./split-view-outlet.component.css']
})
export class SplitViewOutletComponent implements OnInit {
  private splitViewService: SplitViewService;

  constructor(splitViewService: SplitViewService) {
    this.splitViewService = splitViewService;
  }

  ngOnInit(): void {
  }

  get SplitViewOrderedForward() {
    return this.splitViewService.OrderedForward;
  }

  get SplitViewAreaAVisible() {
    return this.splitViewService.AreaAVisible;
  }

  get SplitViewAreaBVisible() {
    return this.splitViewService.AreaBVisible;
  }

  get SplitViewSplitModeOn() {
    return this.splitViewService.SplitModeOn;
  }

}
