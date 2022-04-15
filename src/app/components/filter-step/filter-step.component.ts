import { FilterStep } from './../../models/interfaces/filter-step.model';
import { FilterService } from './../../services/filter.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter-step',
  templateUrl: './filter-step.component.html',
  styleUrls: ['./filter-step.component.scss']
})
export class FilterStepComponent implements OnInit, FilterStep {

  @Input()
  selectedEvent: any;
  eventAttributes?: any[];



  constructor(filterService: FilterService) {
    filterService.getEvents()
  }

  ngOnInit(): void {
  }

}
