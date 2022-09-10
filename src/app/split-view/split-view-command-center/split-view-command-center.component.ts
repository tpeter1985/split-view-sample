import { Component, OnInit } from '@angular/core';
import { SplitViewService } from '../split-view.service';

@Component({
  selector: 'split-view-command-center',
  templateUrl: './split-view-command-center.component.html',
  styleUrls: ['./split-view-command-center.component.css']
})
export class SplitViewCommandCenterComponent implements OnInit {
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

  get ActiveSide() {
    return this.splitViewService.ActiveSide;
  }

  activate(side: 'left' | 'right'){
    this.splitViewService.activate(side);
  }

  turnSplitModeOn(){
    this.splitViewService.turnSplitModeOn();
  }

  turnSplitModeOff(){
    this.splitViewService.turnSplitModeOff();
  }

  changeOrder(){
    this.splitViewService.changeOrder();
  }

}
