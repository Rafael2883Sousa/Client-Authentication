import { Component } from '@angular/core';
import { ClientCodeInputComponent } from './components/client-code-input/client-code-input.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ClientCodeInputComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'client-authentication';
}
