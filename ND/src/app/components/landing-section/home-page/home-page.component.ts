import { Component } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {
  loginModal: boolean = false;
  registerModal: boolean = false;
  toggleLoginModal(){
    this.loginModal = !this.loginModal;
  }
  toggleRegisterModal(){
    this.registerModal = !this.registerModal;
  }

}
