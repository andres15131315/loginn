import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-login',
  templateUrl: './login.html',
  styleUrls: ['../app.css'],
  imports: [RouterLink]
})
export class LoginComponent {
  constructor(private router: Router) {}
  goToRegister() { this.router.navigate(['/register']); }
}
