import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CallActionAreaComponent } from './call-action-area.component';

describe('CallActionAreaComponent', () => {
  let component: CallActionAreaComponent;
  let fixture: ComponentFixture<CallActionAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CallActionAreaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CallActionAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
