import { Component, ViewChild } from '@angular/core';
import { PopupComponent } from './popup/popup.component';
import { BoardListComponent } from './board-list/board-list.component';


@Component({
  selector: 'sidebar',
  standalone: true,
  imports: [PopupComponent, BoardListComponent],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
@ViewChild(PopupComponent) popupComponent!: PopupComponent;

triggerPopup(): void {
  this.popupComponent.openModal();
}
}
