import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardService } from '../../../services/board.service';


@Component({
  selector: 'board-list',
  standalone: true, 
  imports: [CommonModule], 
  templateUrl: './board-list.component.html',
  styleUrls: ['./board-list.component.scss'],
})
export class BoardListComponent implements OnInit {
  boards: any[] = []; // Holds the list of boards
  errorMessage: string = '';

  constructor(private boardService: BoardService) {}

  ngOnInit(): void {
    this.loadBoards();
  }

  loadBoards(): void {
    this.boardService.getBoards().subscribe({
      next: (data) => {
        this.boards = data;
      },
      error: (error) => {
        this.errorMessage = 'Failed to load boards';
        console.error('Error fetching boards:', error);
      },
    });
  }
}
