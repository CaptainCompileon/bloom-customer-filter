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
export class FilterStepComponent implements OnInit {

  @Input()
  step!: FilterStep;

  readonly addEventAttributeButtonLabel: string = "add event attribute"
  readonly refineMoreLabel: string = "refine more"

  events$!: Observable<FilterEvent[]>;
  selectedEvent?: FilterEvent;


  constructor(private filterService: FilterService) {
  }

  ngOnInit(): void {
    this.events$ = this.filterService.Events;
  }

  onEventSelectedChange(value: any) {
    console.log(value)
  }

  onAddEventAttribute() {
    this.filterService.addEventAttributeToFilterStepWithId(this.step.id)
  }


}
