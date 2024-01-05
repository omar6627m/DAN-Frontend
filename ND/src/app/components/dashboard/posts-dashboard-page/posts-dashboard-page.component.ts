import { Component } from '@angular/core';

@Component({
  selector: 'app-posts-dashboard-page',
  templateUrl: './posts-dashboard-page.component.html',
  styleUrls: ['./posts-dashboard-page.component.scss']
})
export class PostsDashboardPageComponent {
  public postType: string = "All";
  public tableColumns: string[] = ["ID","TYPE","AUTHOR","TITLE","ACTIONS"];

  onPostTypeChange(newValue: string) {
    this.postType = newValue;
    // TODO: Fetch or filter data
  }

}
