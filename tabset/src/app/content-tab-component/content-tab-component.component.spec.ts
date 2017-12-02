import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentTabComponentComponent } from './content-tab-component.component';

describe('ContentTabComponentComponent', () => {
  let component: ContentTabComponentComponent;
  let fixture: ComponentFixture<ContentTabComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentTabComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentTabComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
