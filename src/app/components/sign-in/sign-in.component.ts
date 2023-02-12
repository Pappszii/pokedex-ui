import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent {
  loginForm!: FormGroup;

  constructor(public authService: AuthService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.email,
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ])
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      this.authService.login(this.email?.value, this.password?.value)
        .then((res) => {
          if (res) {
            this.router.navigate(['pokedex']);
          }
        })
        .catch(err => {
          //handle
        });
    }
  }

  get email() { return this.loginForm.get('email'); }

  get password() { return this.loginForm.get('password'); }
}
