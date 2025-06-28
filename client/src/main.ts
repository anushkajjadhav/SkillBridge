import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { importProvidersFrom } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { TokenInterceptor } from './app/interceptors/token.interceptor';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    provideHttpClient(withInterceptors([TokenInterceptor])),
    importProvidersFrom(CommonModule, FormsModule)
  ]
}).catch(err => console.error(err));
