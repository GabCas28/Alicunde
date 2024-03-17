import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-success',
  standalone: true,
  imports: [],
  templateUrl: './success.template.html',
  styleUrl: './success.style.css',
})
export class SuccessComponent {
  constructor(private router: Router) {}

  public onLogOut() {
    // Navigate to Log In view
    this.router.navigate(['login']);
  }
}
