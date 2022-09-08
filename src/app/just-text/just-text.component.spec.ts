import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JustTextComponent } from './just-text.component';

describe('JustTextComponent', () => {
  let component: JustTextComponent;
  let fixture: ComponentFixture<JustTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JustTextComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JustTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
