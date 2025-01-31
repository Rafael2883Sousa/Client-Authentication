import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { appRoutes } from './app/app.routes';

// Bootstrap the Angular application
bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(withInterceptorsFromDi()), // Provide HTTP client with interceptors
    appRoutes 
  ]
})
.catch(err => console.error(err)); 
 