import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompteByuserComponent } from './compte-byuser.component';

describe('CompteByuserComponent', () => {
  let component: CompteByuserComponent;
  let fixture: ComponentFixture<CompteByuserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompteByuserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompteByuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
