import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendingProductAreaComponent } from './trending-product-area.component';

describe('TrendingProductAreaComponent', () => {
  let component: TrendingProductAreaComponent;
  let fixture: ComponentFixture<TrendingProductAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrendingProductAreaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrendingProductAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
