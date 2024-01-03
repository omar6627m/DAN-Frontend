import { Component } from '@angular/core';

@Component({
  selector: 'app-minimal-header',
  templateUrl: './minimal-header.component.html',
  styleUrls: ['./minimal-header.component.scss']
})
export class MinimalHeaderComponent {

  logout() {
    console.log("logout");
  }

}
