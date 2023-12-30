import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {
  @Input() isOpen: boolean = false;
  @Input() width: string = "95%";
  @Input() maxWidth: string = "1200px";
  @Output() close: EventEmitter<any> = new EventEmitter();

}
