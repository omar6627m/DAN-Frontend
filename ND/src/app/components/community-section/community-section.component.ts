import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-community-section',
  templateUrl: './community-section.component.html',
  styleUrls: ['./community-section.component.scss']
})
export class CommunitySectionComponent {
  @Input() type: string = "default";
  public tabs: string[] = ["All", "Announcements", "People’s needs", "Volunteers", "News"];
  public selectedTab = "All";
  public posts:{title:string,body:string, type: string;}[] = [
    {title:"Lorem ipsum dolor sit amet consectetur.",
      body: "Lorem ipsum dolor sit amet consectetur. Pharetra praesent purus posuere leo tincidunt mauris sed turpis et. Aliquet lorem nunc neque nec.",
      type: "volunteering"},
    {title:"Lorem ipsum dolor sit amet consectetur.",
      body: "Lorem ipsum dolor sit amet consectetur. Pharetra praesent purus posuere leo tincidunt mauris sed turpis et. Aliquet lorem nunc neque nec.",
      type: "help"},
    {title:"Lorem ipsum dolor sit amet consectetur.",
      body: "Lorem ipsum dolor sit amet consectetur. Pharetra praesent purus posuere leo tincidunt mauris sed turpis et. Aliquet lorem nunc neque nec.",
      type: "announcement"}
  ];

  setSelectedTab(tab: string) {
    this.selectedTab = tab;
    // TODO: fetch posts of this tab
  }
}
