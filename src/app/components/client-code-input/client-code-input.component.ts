import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { ClientService } from '../../services/client.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { TempCodeService } from '../../services/temp-code.service';
import { TempCodeValidationComponent } from '../temp-code-validation/temp-code-validation.component';

@Component({
  selector: 'app-client-code-input',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './client-code-input.component.html',
  styleUrls: ['./client-code-input.component.css']
})
export class ClientCodeInputComponent implements OnDestroy {
  clientName: string = ''; // Stores the client's name input
  clientCode: string = ''; // Stores the client's code input
  errorMessage: string = ''; // Stores error messages if validation fails
  isSubmitting: boolean = false; // Indicates whether a submission is in progress
  tempCode: string = ''; // Stores the temporary code generated after validation
  userInputTempCode: string = ''; // Stores the user's input for the temporary code
  isValidated: boolean = false; // Indicates if the client has been validated
  intervalId: any; // Stores the ID of the interval timer
  timeRemaining: number = 30; // Timer for code regeneration
  isValid: boolean = false; // Indicates whether the user's input matches the temporary code

  constructor(private clientService: ClientService, private tempCodeService: TempCodeService, private router: Router) { }

  // Method to validate the client's name and code
  validateCode() {
    this.isSubmitting = true; // Disable button when submission starts
    this.clientService.validateClient(this.clientName, this.clientCode)
      .pipe(
        catchError(error => {
          this.errorMessage = 'An error occurred while validating. Please try again later.';
          console.error('Validation error:', error); // for debugging purposes
          return of(false); // Return a safe value to allow the app to continue running(in this case, false).
        })
      )
      .subscribe(isValid => {
        this.isSubmitting = false; // Re-enable button after submission ends
        if (isValid) {
          this.errorMessage = ''; // Clear error message if valid
          this.isValidated = true; // Mark the client as validated
          this.generateTempCode(); // Generate the temporary code
          console.log('Valid'); //for debugging purposes
          // this.router.navigate(['/temp-code', { name: this.clientName }]); // Redirect to the temporary code page
          this.startTimer(); // Start the timer for code regeneration
        } else {
          this.errorMessage = 'Invalid client name or code.'; // Show error message if invalid
        }
      });
  }

  generateTempCode() {
    this.tempCode = this.tempCodeService.generateTempCode();
  }

  // Method to start the countdown timer for code regeneration
  startTimer() {
    this.intervalId = setInterval(() => {
      if (this.timeRemaining > 0) {
        this.timeRemaining--;
      } else {
        this.generateTempCode();
        this.timeRemaining = 30;
      }
    }, 1000);
  }

  // Method to validate the user's input against the temporary code
  validateTempCode() {
    if (this.userInputTempCode === this.tempCode) {
      this.isValid = true; // Set to true if the code matches
      this.errorMessage = ''; // Clear error message if valid
    } else {
      this.isValid = false; // Set to false if the code doesn't match
      this.errorMessage = 'Invalid temporary code.'; // Show error message if invalid
    }
  }

  // Method to clear the timer when the component is destroyed
  ngOnDestroy() {
    clearInterval(this.intervalId);
  }
}
   

