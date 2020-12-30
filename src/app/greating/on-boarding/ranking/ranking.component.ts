import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {OnBoardingQuestion, OnBoardingType} from '../../../models/onBoarding';

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.scss'],
})
export class RankingComponent implements OnInit, OnDestroy {

  @Input()  questions: OnBoardingQuestion;
  @Output() updateObjDataEvent: EventEmitter<string> = new EventEmitter<string>();
  response: string;

  constructor() { }

  ngOnInit() {}

  getSelectedData() {
    this.updateObjDataEvent.emit(this.response);
  }

  ngOnDestroy() {
    this.response = null;
  }
}
