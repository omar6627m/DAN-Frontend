import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  public mobileNavOpen: boolean = false;


  constructor(private router: Router) { }

  openMobileNav():void{
    this.mobileNavOpen = true;
  }
  closeMobileNav():void{
    this.mobileNavOpen = false;
  }

  goToDonate(){
    this.router.navigate(['/donate']);
  }
  goToHelp(){
    this.router.navigate(['/help']);
  }

}
