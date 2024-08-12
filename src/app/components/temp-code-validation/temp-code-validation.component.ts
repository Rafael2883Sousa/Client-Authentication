import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-temp-code-validation',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './temp-code-validation.component.html',
  styleUrls: ['./temp-code-validation.component.css']
}) 
export class TempCodeValidationComponent implements OnInit {
  clientName: string = ''; // Stores the client's name from the route parameter
  tempCode: string = ''; // Stores the generated temporary code
  userInputCode: string = ''; // Stores the code input by the user
  isValid: boolean = false; // Indicates whether the input code is valid
  errorMessage: string = ''; // Stores error messages if validation fails

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.clientName = this.route.snapshot.paramMap.get('name') || ''; // Get the client's name from the route
    this.generateTempCode(); // Generate a temporary code
  }

  // Method to generate a random temporary code
  generateTempCode() {
    const array = new Uint32Array(2);
    crypto.getRandomValues(array);
    this.tempCode = Array.from(array, num => num.toString(36)).join('').substr(0, 8).toUpperCase();
  } // Fills an array of numbers with cryptographically secure values, then converted them to base-36 strings (which include digits 0-9 and letters a-z) and truncated to 8 characters.
  

  // Method to validate the user's input against the temporary code
  validateTempCode() {
    if (this.userInputCode === this.tempCode) {
      this.isValid = true; // Set to true if the code matches
      this.errorMessage = ''; // Clear error message if valid
    } else {
      this.isValid = false; // Set to false if the code doesn't match
      this.errorMessage = 'Invalid temporary code.'; // Show error message if invalid
    }
  }
}
