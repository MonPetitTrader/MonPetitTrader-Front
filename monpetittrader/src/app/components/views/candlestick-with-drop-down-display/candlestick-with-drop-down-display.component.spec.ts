import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandlestickWithDropDownDisplayComponent } from './candlestick-with-drop-down-display.component';

describe('CandlestickWithDropDownDisplayComponent', () => {
  let component: CandlestickWithDropDownDisplayComponent;
  let fixture: ComponentFixture<CandlestickWithDropDownDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CandlestickWithDropDownDisplayComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CandlestickWithDropDownDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
