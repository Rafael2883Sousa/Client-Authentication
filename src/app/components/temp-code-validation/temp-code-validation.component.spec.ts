import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TempCodeValidationComponent } from './temp-code-validation.component';

describe('TempCodeValidationComponent', () => {
  let component: TempCodeValidationComponent;
  let fixture: ComponentFixture<TempCodeValidationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TempCodeValidationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TempCodeValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
