import { Component, OnInit } from '@angular/core';

// Simple dummy component representing the "New Vacancy form".
@Component({
    selector: 'new-vacancy',
    template: `Create new vacancy - Executive: <input type="text">`
})

export class NewVacancyComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}