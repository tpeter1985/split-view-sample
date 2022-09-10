import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SplitViewCommandCenterComponent } from './split-view-command-center.component';

describe('SplitViewCommandCenterComponent', () => {
  let component: SplitViewCommandCenterComponent;
  let fixture: ComponentFixture<SplitViewCommandCenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SplitViewCommandCenterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SplitViewCommandCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
