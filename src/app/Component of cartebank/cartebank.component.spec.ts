import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartebankComponent } from './cartebank.component';

describe('CartebankComponent', () => {
  let component: CartebankComponent;
  let fixture: ComponentFixture<CartebankComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CartebankComponent]
    });
    fixture = TestBed.createComponent(CartebankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
