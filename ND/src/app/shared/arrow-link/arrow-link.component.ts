import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-arrow-link',
  templateUrl: './arrow-link.component.html',
  styleUrls: ['./arrow-link.component.scss']
})
export class ArrowLinkComponent {
  @Input() position: string = 'end';
  @Input() text: string = 'More Causes';
  @Input() link: string = '/causes';


}
