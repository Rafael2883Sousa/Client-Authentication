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

  ngOnInit() {
    this.generateTempCode();
    this.intervalId = setInterval(() => {
      this.generateTempCode();
    }, 30000);
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
  }

  generateTempCode() {
    this.tempCode = Math.random().toString(36).substr(2, 8).toUpperCase();
  }
}
