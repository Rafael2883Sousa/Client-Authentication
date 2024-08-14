import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TempCodeService } from '../../services/temp-code.service';

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

  constructor(private route: ActivatedRoute, private tempCodeService: TempCodeService) { }

  ngOnInit() {
    this.clientName = this.route.snapshot.paramMap.get('name') || ''; // Get the client's name from the route
    this.tempCode = this.tempCodeService.generateTempCode(); // Generate a temporary code
  }

}
