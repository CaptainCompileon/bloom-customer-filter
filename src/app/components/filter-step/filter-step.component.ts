import { Observable } from 'rxjs';
import { FilterStep } from '../../models/classes/filter-step.model';
import { FilterService } from './../../services/filter.service';
import { Component, Input, OnInit } from '@angular/core';
import { FilterEvent } from 'src/app/models/classes/event.model';
import { faCopy } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-filter-step',
  templateUrl: './filter-step.component.html',
  styleUrls: ['./filter-step.component.scss']
})
export class FilterStepComponent implements OnInit {


  @Input()
  index!: number;
  @Input()
  step!: FilterStep;

  readonly addEventAttributeButtonLabel: string = "+ Add event attribute"
  readonly refineMoreLabel: string = "Refine more"

  events$!: Observable<FilterEvent[]>;

  faCopy = faCopy;
  faTrash = faTrash;

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

  onCopyFilterStep() {
    this.filterService.copyFilterStep(this.step);
  }

  onDeleteFilterStep() {
    this.filterService.deleteFilterStep(this.step);
  }
}
