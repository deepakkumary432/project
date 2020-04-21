import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplyLeaveOnbehalfComponent } from './apply-leave-onbehalf.component';

describe('ApplyLeaveOnbehalfComponent', () => {
  let component: ApplyLeaveOnbehalfComponent;
  let fixture: ComponentFixture<ApplyLeaveOnbehalfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplyLeaveOnbehalfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplyLeaveOnbehalfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
