import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TempCodeService {

  // Method to generate a random temporary code
  generateTempCode(): string {
    const array = new Uint32Array(2);
    crypto.getRandomValues(array);
    return Array.from(array, num => num.toString(36)).join('').substr(0, 8).toUpperCase();
  } // Fills an array of numbers with cryptographically secure values, then converted them to base-36 strings (which include digits 0-9 and letters a-z) and truncated to 8 characters.
  constructor() { }
}
