/*
 * Created on Sat Oct 19 2019
 *
 * Copyright (c) 2019 Dominik Sammer
 */

import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { AuthoriationService } from '../authoriation.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  user: User;

  constructor(private authService: AuthoriationService) {
    this.user = new User();
   }

  ngOnInit() {
  }

  async login() {
    await this.authService.login(this.user.email, this.user.password);
  }
}
