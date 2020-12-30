import {Component, Input, OnInit} from '@angular/core';
import {UserLogin, Login} from 'src/app/models/userLogin';
import {AuthService} from '../../services/authService';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit 
{
  showLoader    : boolean = false
  userInfo      : UserLogin = new class implements UserLogin
  {
    email   : string;
    password: string;
    username: string;
  };

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {
    let user = this.auth.userInfo();
    if (user.jwt != null)
    {
        this.router.navigateByUrl('').then();
    }
  }

  login(userInfo: UserLogin)
  {
   this.auth.login(userInfo).subscribe(({data}) => {
     // @ts-ignore
     let test = data.login as Login;
      localStorage.setItem("jwt", test.jwt);
      localStorage.setItem("username", test.user.username);
      localStorage.setItem("email", test.user.email);
     localStorage.setItem("id", test.user.id);
     this.router.navigateByUrl('').then();

    }, (error) => {
      console.log('there was an error sending the query', error);
    });
  }

}
