import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniCartList } from './mini-cart-list';

describe('MiniCartList', () => {
  let component: MiniCartList;
  let fixture: ComponentFixture<MiniCartList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MiniCartList],
    }).compileComponents();

    fixture = TestBed.createComponent(MiniCartList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
