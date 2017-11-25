import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShadowDomStyleComponent } from './shadow-dom-style.component';

describe('ShadowDomStyleComponent', () => {
  let component: ShadowDomStyleComponent;
  let fixture: ComponentFixture<ShadowDomStyleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShadowDomStyleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShadowDomStyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
