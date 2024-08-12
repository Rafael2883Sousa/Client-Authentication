import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ClientService } from '../../services/client.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';


@Component({
  selector: 'app-client-code-input',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './client-code-input.component.html',
  styleUrls: ['./client-code-input.component.css']
})
export class ClientCodeInputComponent {
  clientName: string = ''; // Stores the client's name input
  clientCode: string = ''; // Stores the client's code input
  errorMessage: string = ''; // Stores error messages if validation fails
  isSubmitting: boolean = false; // Indicates whether a submission is in progress

  constructor(private clientService: ClientService, private router: Router) { }

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
        if (isValid) {
          this.isSubmitting = false; // Re-enable button after submission ends
          this.errorMessage = ''; // Clear error message if valid
          console.log('Valid'); //for debugging purposes
          this.router.navigate(['/temp-code', { name: this.clientName }]); // Redirect to the temporary code page
        } else {
          this.errorMessage = 'Invalid client name or code.'; // Show error message if invalid
        }
      });
  }
  
}
