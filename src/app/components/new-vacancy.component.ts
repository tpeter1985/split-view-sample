import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'new-vacancy',
    template: `Create new vacancy - Executive: <input type="text">`
})

export class NewVacancyComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}