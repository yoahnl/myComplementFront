import {Component, OnInit} from '@angular/core';
import {AuthService} from '../services/authService';
import {Router} from '@angular/router';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage implements OnInit{

  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit()
  {
    let user = this.auth.userInfo();
    this.auth.getuserBoardedStatus();
    if (user.jwt == null)
    {
      this.router.navigateByUrl('landing').then();
    }
  }

}
