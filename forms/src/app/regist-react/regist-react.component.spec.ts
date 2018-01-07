import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistReactComponent } from './regist-react.component';

describe('RegistReactComponent', () => {
  let component: RegistReactComponent;
  let fixture: ComponentFixture<RegistReactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistReactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistReactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
