import { Routes } from '@angular/router';
import { provideRouter } from '@angular/router';
import { ClientCodeInputComponent } from './components/client-code-input/client-code-input.component';

const routes: Routes = [
  { path: '', component: ClientCodeInputComponent }, // Route for client code input
];

export const appRoutes = provideRouter(routes);
 