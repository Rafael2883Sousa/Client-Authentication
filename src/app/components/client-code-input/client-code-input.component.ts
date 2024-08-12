import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ClientService } from '../../services/client.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

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

  constructor(private clientService: ClientService, private router: Router) { }

  // Method to validate the client's name and code
  validateCode() {
    this.clientService.validateClient(this.clientName, this.clientCode).subscribe(isValid => {
      if (isValid) {
        this.errorMessage = ''; // Clear error message if valid
        this.router.navigate(['/temp-code', { name: this.clientName }]); // Redirect to the temporary code page
      } else {
        this.errorMessage = 'Invalid client name or code.'; // Show error message if invalid
      }
    });
  }
}
