import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() style: string = 'primary';
  @Output() onClick: EventEmitter<void> = new EventEmitter<void>();

  getButtonClass(): string {
    return `btn btn-${this.style}`;
  }

  handleClick(): void {
    this.onClick.emit();
  }
}
