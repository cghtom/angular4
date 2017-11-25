import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InlineStylingComponent } from './inline-styling.component';

describe('InlineStylingComponent', () => {
  let component: InlineStylingComponent;
  let fixture: ComponentFixture<InlineStylingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InlineStylingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InlineStylingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
