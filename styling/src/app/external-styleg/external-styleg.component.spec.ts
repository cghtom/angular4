import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExternalStylegComponent } from './external-styleg.component';

describe('ExternalStylegComponent', () => {
  let component: ExternalStylegComponent;
  let fixture: ComponentFixture<ExternalStylegComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExternalStylegComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExternalStylegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
