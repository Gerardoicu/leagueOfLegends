import {Component, OnInit} from '@angular/core';
import {AuthService} from "../auth/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {

  username = 'user1';
  password = 'password1';

  constructor(private authService: AuthService, private router: Router) {
  }

  ngOnInit() {
    this.login();
  }

  login() {
    this.authService.login(this.username, this.password).subscribe(
      () => {
        this.router.navigate(['/home']);
      },
      error => {
        console.error('Login failed');
      }
    );
  }
}
