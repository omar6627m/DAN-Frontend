import {Component, Input} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.scss']
})
export class PostCardComponent {
  @Input() post: { title: string, body: string, type: string; } | null = null;

  constructor(private router: Router) {
  }

  goToDetails() {
    this.router.navigate(["/feed/post"])
  }
}
