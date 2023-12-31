import {Component, EventEmitter, Output} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  public mobileNavOpen: boolean = false;
  @Output() openLogin: EventEmitter<void> = new EventEmitter<void>();
  @Output() openRegister: EventEmitter<void> = new EventEmitter<void>();


  constructor(private router: Router) { }

  openMobileNav():void{
    this.mobileNavOpen = true;
  }
  closeMobileNav():void{
    this.mobileNavOpen = false;
  }

  goToLogin(){
    this.openLogin.emit();
  }
  goToRegister(){
    this.openRegister.emit();
  }

}
