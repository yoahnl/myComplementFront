import {Component, Input, OnInit} from '@angular/core';
import { Router} from '@angular/router';
import {Login, UserInfo, UserLogin} from '../../models/userLogin';
import {NavController} from '@ionic/angular';
import {AuthService} from '../../services/authService';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit
{
  isLogin     : boolean = true;
  showLoader  : boolean = false;
  userInfo    : UserLogin = new class implements UserLogin
  {
    email   : string;
    password: string;
    username: string;
  };

  constructor(private auth: AuthService, private navCtrl: NavController, private router: Router) { }

  ngOnInit() {}

  register(userInfo: UserLogin)
  {
    console.log(userInfo);
    this.auth.register(userInfo).subscribe(({data}) => {
      // @ts-ignore
      let test = data.login as Login;
      console.log('got data', data);
      this.auth.loginWithCredential(userInfo);

    }, (error) => {
      console.log('there was an error sending the query', error);
    });
  }

  toLoginPage()
  {
    this.navCtrl.pop().then();
  }
}
