import { Component, OnInit } from '@angular/core';

// Simple dummy component representing the "Jobs table view".
@Component({
    selector: 'jobs',
    template: `Jobs grid shown here`
})

export class JobsComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}