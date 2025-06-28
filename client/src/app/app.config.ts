import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { TokenInterceptor } from './interceptors/token.interceptor';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { TutorListComponent } from './tutor-list/tutor-list.component';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(withInterceptors([TokenInterceptor])),
    provideRouter(routes)
  ]
};
