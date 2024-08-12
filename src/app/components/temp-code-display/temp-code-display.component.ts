import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-temp-code-display',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './temp-code-display.component.html',
  styleUrls: ['./temp-code-display.component.css']
})
export class TempCodeDisplayComponent implements OnInit, OnDestroy {
  tempCode: string = '';
  intervalId: any; 
  timeRemaining: number = 30; 


  ngOnInit() {
    this.generateTempCode();
    this.intervalId = setInterval(() => {
      if (this.timeRemaining > 0) {
        this.timeRemaining--; 
      } else {
        this.generateTempCode();
        this.timeRemaining = 30; 
      }
    }, 1000);
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
  }

  generateTempCode() {
    this.tempCode = Math.random().toString(36).substr(2, 8).toUpperCase();
  }
}
