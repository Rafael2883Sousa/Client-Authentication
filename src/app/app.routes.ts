import { Routes } from '@angular/router';
import { provideRouter } from '@angular/router';
import { ClientCodeInputComponent } from './components/client-code-input/client-code-input.component';
import { TempCodeValidationComponent } from './components/temp-code-validation/temp-code-validation.component';

const routes: Routes = [
  { path: '', component: ClientCodeInputComponent }, // Route for client code input
  { path: 'temp-code', component: TempCodeValidationComponent } // Route for temporary code validation
];

export const appRoutes = provideRouter(routes);
