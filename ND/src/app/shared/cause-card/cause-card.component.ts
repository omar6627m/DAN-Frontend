import {Component, Input} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-cause-card',
  templateUrl: './cause-card.component.html',
  styleUrls: ['./cause-card.component.scss']
})
export class CauseCardComponent {
  @Input() disabled: boolean = false;

  constructor(private router: Router) {
  }

  learnMoreClickHandler() {
    this.router.navigate(["/causes/id"]);
  }
}
