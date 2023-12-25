import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;

  constructor(private fb: FormBuilder, private auth : AuthenticationService, private storage : LocalStorageService) { }


  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onLogin() {
    this.auth.login(this.loginForm.value.email,this.loginForm.value.password).subscribe(
      (response)=> {
        console.log(response);
        this.storage.setUser(response);
        this.storage.setToken(response.token);
      },(error)=>{
        console.log(error); 
      }
    )
  }
}
