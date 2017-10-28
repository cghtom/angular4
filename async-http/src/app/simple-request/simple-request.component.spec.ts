import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleRequestComponent } from './simple-request.component';

describe('SimpleRequestComponent', () => {
  let component: SimpleRequestComponent;
  let fixture: ComponentFixture<SimpleRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpleRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
