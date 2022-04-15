import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter-step',
  templateUrl: './filter-step.component.html',
  styleUrls: ['./filter-step.component.scss']
})
export class FilterStepComponent implements OnInit {

  @Input() selectedEvent: any;
  @Input() eventAttributes?: any[];

  constructor() { }

  ngOnInit(): void {
  }

}
