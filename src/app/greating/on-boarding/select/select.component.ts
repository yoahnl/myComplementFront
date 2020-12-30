import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {OnBoardingQuestion, OnBoardingType} from '../../../models/onBoarding';

let questionWorkOut      : OnBoardingQuestion = {
  title: "workOut",
  question: ["LessThanOneW", "OneW", "TwoW", "ThreeW", "FourW", "FiveW", "MoreThanFiveW"],
  type: OnBoardingType.ranking
};

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
})
export class SelectComponent implements OnInit, OnDestroy {

  @Input() questions: OnBoardingQuestion;
  @Output() updateObjDataEvent: EventEmitter<string> = new EventEmitter<string>();
  response: string;
  questionWorkOut: OnBoardingQuestion = questionWorkOut;
  questionWorkOutTmp: OnBoardingQuestion;
  isWorkOut: boolean = false;

  constructor() { }

  ngOnInit()
  {
    if (this.questions.title == "How many times do you go the gym per week ?")
    {
      this.questionWorkOutTmp = this.questions;
      this.questions = this.questionWorkOut;
      this.isWorkOut = true;
    }
  }

  getSelectedData() {
    this.updateObjDataEvent.emit(this.response);
  }

  ngOnDestroy() {
    this.response = null;
    this.isWorkOut = false;
  }
}
