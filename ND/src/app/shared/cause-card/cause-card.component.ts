import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-cause-card',
  templateUrl: './cause-card.component.html',
  styleUrls: ['./cause-card.component.scss']
})
export class CauseCardComponent {
  @Input() disabled: boolean = false;

}
