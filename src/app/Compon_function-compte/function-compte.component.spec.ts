import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FunctionCompteComponent } from './function-compte.component';

describe('FunctionCompteComponent', () => {
  let component: FunctionCompteComponent;
  let fixture: ComponentFixture<FunctionCompteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FunctionCompteComponent]
    });
    fixture = TestBed.createComponent(FunctionCompteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
