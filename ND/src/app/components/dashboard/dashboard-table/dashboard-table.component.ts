import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-dashboard-table',
  templateUrl: './dashboard-table.component.html',
  styleUrls: ['./dashboard-table.component.scss']
})
export class DashboardTableComponent {
  @Input() tableColumns: string[] = [];
  @Output() editItemModalOpen: EventEmitter<number> = new EventEmitter<number>();
  @Output() deleteItemModalOpen: EventEmitter<number> = new EventEmitter<number>();

  openEditModal(id:number) {
    this.editItemModalOpen.emit(id);
  }
  openDeleteModal(id:number) {
    this.deleteItemModalOpen.emit(id);
  }

}
