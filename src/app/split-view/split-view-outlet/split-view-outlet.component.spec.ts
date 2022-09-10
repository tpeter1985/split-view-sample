import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SplitViewOutletComponent } from './split-view-outlet.component';

describe('SplitViewOutletComponent', () => {
  let component: SplitViewOutletComponent;
  let fixture: ComponentFixture<SplitViewOutletComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SplitViewOutletComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SplitViewOutletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
