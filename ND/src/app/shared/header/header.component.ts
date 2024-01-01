import {Component, EventEmitter, Output} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  public mobileNavOpen: boolean = false;
  loginModal: boolean = false;
  registerModal: boolean = false;

  constructor(private router: Router) { }

  openMobileNav():void{
    this.mobileNavOpen = true;
  }

  closeMobileNav():void{
    this.mobileNavOpen = false;
  }
  toggleLoginModal(){
    this.loginModal = !this.loginModal;
  }
  toggleRegisterModal(){
    this.registerModal = !this.registerModal;
  }

}
