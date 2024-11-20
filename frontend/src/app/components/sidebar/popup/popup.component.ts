import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'popup',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './popup.component.html',
  styleUrl: './popup.component.css',
})
export class PopupComponent {

  isModalOpen: boolean = false;
  boardTitle: string = '';
  visibility: string = '';

  constructor(private http: HttpClient) {}

  openModal(): void {
    this.isModalOpen = true;
  }

  closeModal(): void {
    this.isModalOpen = false;
  }

  submitForm(event: Event): void {
    event.preventDefault();

    console.log('New board created:');
    console.log('Board title:', this.boardTitle);
    console.log('Selected visibility:', this.visibility);

    const boardData = {
      title: this.boardTitle,
      visibility: this.visibility,
    };

    this.http.post('http://localhost:8080/api/boards', boardData).subscribe({
      next: (response) => {
        console.log('Board created successfully:', response);
        this.closeModal();
      },
      error: (error) => {
        console.error('Error creating board:', error);
      },
    });

       this.closeModal();
  }
}
