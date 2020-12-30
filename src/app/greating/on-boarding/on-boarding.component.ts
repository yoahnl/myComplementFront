import { Component, OnInit } from '@angular/core';
import {OnBoardingQuestion, OnBoardingType} from '../../models/onBoarding';
import { questionsForBoarding} from './onBoardingData';
import {AuthService} from '../../services/authService';
import {Router} from '@angular/router';

@Component({
  selector: 'app-on-boarding',
  templateUrl: './on-boarding.component.html',
  styleUrls: ['./on-boarding.component.scss'],
})
export class OnBoardingComponent implements OnInit
{

  questions         : OnBoardingQuestion[] = questionsForBoarding;
  questionElements  : OnBoardingQuestion;
  response          : string;
  responses         : string[] = [];
  iterator          : number = 0;
  isNextAvaible     : boolean = true;
  isFinished        : boolean = false;
  size              : number;
  next              : string = "Next question"
  type              : OnBoardingType = OnBoardingType.select;

  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit()
  {
    this.questionElements = this.questions[this.iterator];
    this.type = this.questionElements.type;
    this.size = this.questions.length;
    let user = this.auth.userInfo();
    if (user.jwt == null)
    {
      this.router.navigateByUrl('landing').then();
    }
  }

  goToNextQuestion()
  {
    this.responses.push(this.response);
    this.response = null;
    if (this.iterator < this.size - 1)
    {
      this.isNextAvaible = true;
      this.iterator += 1;
      this.questionElements = this.questions[this.iterator - 1];
      this.questionElements = this.questions[this.iterator];
    }
    else {
      this.next = "Done";
      this.isFinished = true;
    }
    if (this.isFinished)
    {
      this.updateUserInfo();
    }
  }

  updateObj($event: string)
  {
    this.response = $event;
    if (this.iterator < this.size - 1)
    {
      this.next = "Done";
    }
    this.isNextAvaible = false;
  }

  updateUserInfo()
  {
    this.setUserType()
    this.auth.updateUserInfo(this.responses).subscribe((data) => {
      this.router.navigateByUrl('').then();
    });
  }

  private setUserType() {
    let IMC = 0;
    let weight = Number(this.responses[1]);
    let height = Number(this.responses[3]);
    height = height / 100;
    IMC = weight / (height * height);

    if ((this.responses[5] == "to gain muscle" || this.responses[5] == "both") && IMC < 25)
    {
      this.responses.push("hight")
    }
    else if ((this.responses[5] == "to gain muscle" || this.responses[5] == "both") && IMC > 25)
    {
      this.responses.push("medium")
    }
    else if ((this.responses[5] == "to loose weight") && IMC < 25)
    {
      this.responses.push("medium")
    }
    else if ((this.responses[5] == "to loose weight" || this.responses[5] == "both") && IMC > 25)
    {
      this.responses.push("medium")
    }
    else if ((this.responses[5] == "to loose weight") && IMC > 25)
    {
      this.responses.push("low")
    }
    else if ((this.responses[5] == "to loose weight" || this.responses[5] == "both") && IMC < 25)
    {
      this.responses.push("low")
    }
    else
    {
      this.responses.push("low");
    }
  }

}
