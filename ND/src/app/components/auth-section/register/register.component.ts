import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  registerForm!: FormGroup;

  constructor(private fb: FormBuilder,private storage: LocalStorageService, private auth : AuthenticationService) { }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onRegister() {
    this.auth.register(this.registerForm.value.email,
      this.registerForm.value.password ,
      this.registerForm.value.first_name,
      this.registerForm.value.last_name).subscribe(
      (response) => {
        this.storage.setUser(response);
        this.storage.setToken(response.token);     
       }, 
      (error)=>{
        console.log(error);
      }
    )
  }
}
