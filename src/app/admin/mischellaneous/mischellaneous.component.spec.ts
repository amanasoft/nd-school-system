import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MischellaneousComponent } from './mischellaneous.component';

describe('MischellaneousComponent', () => {
  let component: MischellaneousComponent;
  let fixture: ComponentFixture<MischellaneousComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MischellaneousComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MischellaneousComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
