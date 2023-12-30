import { Component } from '@angular/core';

@Component({
  selector: 'app-guideline-section',
  templateUrl: './guideline-section.component.html',
  styleUrls: ['./guideline-section.component.scss']
})
export class GuidelineSectionComponent {
  public guidelines: {title: string, icon: string }[] = [
    {title:"Lightning",icon:"electric_bolt"},
    {title:"Storm",icon:"thunderstorm"},
    {title:"Earthquake",icon:"vibration"},
    {title:"Tsunami",icon:"tsunami"},
    {title:"Volcano",icon:"volcano"},
    {title:"Lightning",icon:"electric_bolt"},
    {title:"Storm",icon:"thunderstorm"},
    {title:"Earthquake",icon:"vibration"},
    {title:"Volcano",icon:"volcano"},
    {title:"Tsunami",icon:"tsunami"}
    ];
}
