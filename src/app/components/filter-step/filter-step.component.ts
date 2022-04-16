import { Observable } from 'rxjs';
import { FilterStep } from './../../models/interfaces/filter-step.model';
import { FilterService } from './../../services/filter.service';
import { Component, Input, OnInit } from '@angular/core';
import { FilterEvent } from 'src/app/models/interfaces/event.model';

@Component({
  selector: 'app-filter-step',
  templateUrl: './filter-step.component.html',
  styleUrls: ['./filter-step.component.scss']
})
export class FilterStepComponent implements OnInit, FilterStep {

  @Input()
  index!: number;

  eventAttributes?: any[];
  events$: Observable<FilterEvent[]>;
  selectedEventId?: number;
  selectedEventPropertyId?: number;
  selectedOperationId?: number;



  constructor(filterService: FilterService) {
    this.events$ = filterService.Events
  }

  ngOnInit(): void {
  }

  onEventSelectedChange() {

  }

  onEventPropertySelectedChange() {

  }

  onOperationSelectedChange() {

  }

}
