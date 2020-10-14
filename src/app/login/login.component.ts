import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {

  constructor(private fauth: AngularFireAuth,
              private router: Router) {
  }

  async login() {
    await this.fauth.signInWithPopup(new auth.GoogleAuthProvider());
    this.router.navigateByUrl('');
  }
}
