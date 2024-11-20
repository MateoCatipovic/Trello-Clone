import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface Board {
  id: string;
  title: string;
  visibility: string;
}

@Injectable({
  providedIn: 'root',
})
export class BoardService {
  private apiUrl = 'http://localhost:8080/api/boards'; // Spring Boot API URL

  constructor(private http: HttpClient) {}

  // Fetch all boards
  getBoards(): Observable<Board[]> {
    return this.http.get<Board[]>(this.apiUrl);
  }
}
