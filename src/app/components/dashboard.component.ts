import { Component, OnInit } from '@angular/core';

// Simple dummy component representing the dashboard.
@Component({
    selector: 'dashboard',
    template: `Fancy Dashboard shown here`
})

export class DashboardComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}