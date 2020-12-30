import {Component, OnInit} from '@angular/core';
import {AuthService} from '../services/authService';
import {UserBoarded, UserInfo} from '../models/userLogin';
import {ApolloQueryResult} from '@apollo/client/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit{

  user: UserInfo;
  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit() {
    this.user = this.auth.userInfo();
    this.getAllUserInfo();
  }

  getAllUserInfo()
  {
    this.auth.getAllUserInfo().subscribe((data:ApolloQueryResult<any>) => {
      console.table(data.data.user);
      this.user = data.data.user;
    })
  }

  logOut()
  {
    localStorage.clear();
    this.router.navigateByUrl("landing").then();
  }
}
