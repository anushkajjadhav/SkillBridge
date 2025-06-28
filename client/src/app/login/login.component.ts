// src/app/login/login.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  email = '';
  password = '';
  error = '';

  constructor(private http: HttpClient, private router: Router) {}

  login() {
    this.http.post<any>('http://localhost:5050/api/auth/login', {
      email: this.email,
      password: this.password
    }).subscribe({
      next: (res) => {
        console.log('✅ Login success', res);
        localStorage.setItem('token', res.token);
        this.router.navigate(['/tutors']);
      },
      error: (err) => {
        console.error('❌ Login error', err);
        this.error = err.error.message || 'Login failed';
      }
    });
  }
}
