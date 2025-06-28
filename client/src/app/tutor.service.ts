import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tutor } from './tutor.model';

@Injectable({
  providedIn: 'root',
})
export class TutorService {
  private apiUrl = 'http://localhost:5000/api/tutors';

  constructor(private http: HttpClient) {}

  getTutors(): Observable<Tutor[]> {
    return this.http.get<Tutor[]>(this.apiUrl);
  }

  getTutorById(id: string): Observable<Tutor> {
    return this.http.get<Tutor>(`${this.apiUrl}/${id}`);
  }
}
