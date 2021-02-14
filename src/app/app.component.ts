import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'assignment';
  @ViewChild('f') signupForm: NgForm;
  defaultSubscription = 'advanced';

  user = {
    email: '',
    defaultSubscription: '',
    password: ''
  }
  submitted = false;

  onSubmit(){
    this.submitted = true;

    this.user.email = this.signupForm.value.email;
    this.user.defaultSubscription = this.signupForm.value.subscription;
    this.user.password = this.signupForm.value.password;

    this.signupForm.reset();
  }
}
