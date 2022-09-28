import { Component, OnInit } from '@angular/core';

// Empty component needed in order to show Split-View even if there is no
// content defined in the route about what to show in the second area.
// This happens when you just turn Split-View on by clicking "Split mode on".
@Component({
    selector: 'empty',
    template: ``
})

export class EmptyComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}