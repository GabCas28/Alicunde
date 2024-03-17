import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login.template.html',
  styleUrl: './login.style.css',
})
export class LoginComponent {
  constructor(private router: Router) {}

  // Control and validate the 'Email' input
  public user = new FormControl('', {
    validators: [Validators.required, Validators.email],
  });

  // Control and validate the 'Password' input
  public password = new FormControl('', {
    validators: [
      Validators.required,
      Validators.maxLength(32),
      Validators.minLength(8),
    ],
  });

  // Group both inputs inside LoginForm
  public loginForm = new FormGroup({
    user: this.user,
    password: this.password,
  });

  public onLogIn() {
    // Navigate to success view
    this.router.navigate(['success']);
  }
}
