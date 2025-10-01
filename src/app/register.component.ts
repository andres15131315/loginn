import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-register',
  templateUrl: './register.html',
  styleUrls: ['./app.css'],
  imports: [RouterLink]
})
export class RegisterComponent {
  constructor(private router: Router) {}
  goToLogin() { this.router.navigate(['/']); }
}
