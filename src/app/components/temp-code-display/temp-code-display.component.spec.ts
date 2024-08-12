import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TempCodeDisplayComponent } from './temp-code-display.component';

describe('TempCodeDisplayComponent', () => {
  let component: TempCodeDisplayComponent;
  let fixture: ComponentFixture<TempCodeDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TempCodeDisplayComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TempCodeDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
