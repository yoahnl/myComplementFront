import {Component, Input, OnInit} from '@angular/core';
import {PopoverController} from '@ionic/angular';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.scss'],
})
export class DescriptionComponent implements OnInit {

  @Input() description: string;
  @Input() name: string;
  constructor(public popoverController: PopoverController) {}

  ngOnInit(): void {
    //console.log(this.description);
  }

}
