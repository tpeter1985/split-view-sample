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

  get OrderedForward() {
    return this.splitViewService.OrderedForward;
  }

  get AreaAVisible() {
    return this.splitViewService.AreaAVisible;
  }

  get AreaBVisible() {
    return this.splitViewService.AreaBVisible;
  }

  get SplitModeOn() {
    return this.splitViewService.SplitModeOn;
  }

}
