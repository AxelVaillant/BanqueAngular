import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateoperationComponent } from './createoperation.component';

describe('CreateoperationComponent', () => {
  let component: CreateoperationComponent;
  let fixture: ComponentFixture<CreateoperationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateoperationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateoperationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
