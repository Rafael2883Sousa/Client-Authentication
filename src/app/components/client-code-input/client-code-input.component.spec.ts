import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientCodeInputComponent } from './client-code-input.component';

describe('ClientCodeInputComponent', () => {
  let component: ClientCodeInputComponent;
  let fixture: ComponentFixture<ClientCodeInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClientCodeInputComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientCodeInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
