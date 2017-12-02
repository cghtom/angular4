import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentTabsetComponentComponent } from './content-tabset-component.component';

describe('ContentTabsetComponentComponent', () => {
  let component: ContentTabsetComponentComponent;
  let fixture: ComponentFixture<ContentTabsetComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentTabsetComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentTabsetComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
