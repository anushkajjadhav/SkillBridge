import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.html',
  styleUrls: ['./login.scss'],
  imports: [CommonModule, FormsModule] // ✅ Add this line to fix ngModel and *ngIf
})
export class LoginComponent {
  email = '';
  password = '';
  error = '';

  constructor(private http: HttpClient, private router: Router) {}

  login() {
  console.log("🟡 Login function called"); // ✅ DEBUG

  this.http.post<any>('http://localhost:5050/api/auth/login', {
    email: this.email,
    password: this.password
  }).subscribe({
    next: (response) => {
      console.log("🟢 Login success:", response); // ✅ DEBUG
      localStorage.setItem('token', response.token);
      this.router.navigate(['/']);
    },
    error: (err) => {
      console.error("🔴 Login failed:", err); // ✅ DEBUG
      this.error = err.error.message || 'Login failed';
    }
  });
}
}
