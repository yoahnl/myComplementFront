import { Component, OnInit } from '@angular/core';
import {PromptActionButtonTitle, PromptActionLabelLogin} from '../../models/userLogin';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent implements OnInit
{
  isLogin: boolean = true;

  promptLabel             : PromptActionLabelLogin = PromptActionLabelLogin.login;
  promptLabelButtonTitle  : PromptActionButtonTitle = PromptActionButtonTitle.login;
  projectTitle            : string = "My Complement";
  constructor() { }

  ngOnInit() {}

    changeIsLogin()
    {
      if (this.isLogin)
      {
        this.promptLabel = PromptActionLabelLogin.register;
        this.promptLabelButtonTitle = PromptActionButtonTitle.register;
      }
      else if (!this.isLogin)
      {
        this.promptLabel = PromptActionLabelLogin.login;
        this.promptLabelButtonTitle = PromptActionButtonTitle.login;
      }
      this.isLogin = !this.isLogin;
    }
}
