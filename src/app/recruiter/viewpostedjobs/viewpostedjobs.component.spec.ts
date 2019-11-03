import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewpostedjobsComponent } from './viewpostedjobs.component';

describe('ViewpostedjobsComponent', () => {
  let component: ViewpostedjobsComponent;
  let fixture: ComponentFixture<ViewpostedjobsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewpostedjobsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewpostedjobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
