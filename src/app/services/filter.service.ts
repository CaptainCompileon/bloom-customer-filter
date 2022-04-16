import { EventAttribute } from './../models/interfaces/event-attribute.model';
import { OPERATIONS_MOCK } from './operations-mock';
import { Operation } from './../models/interfaces/operation.model';
import { FilterStep } from './../models/interfaces/filter-step.model';
import { Filter } from '../models/classes/filter.model';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { EVENTS_MOCK } from './events-mock';
import { FilterEvent } from '../models/interfaces/event.model';


@Injectable({
  providedIn: 'root'
})
export class FilterService {

  private filter: Filter;
  newfilterStepId: number = 0;

  constructor() {
    this.filter = new Filter();
  }

  get Filter(): Filter {
    return this.filter;
  }

  get Events(): Observable<FilterEvent[]> {
    return of(EVENTS_MOCK);
  }

  get FilterSteps(): Observable<FilterStep[]> {
    return of(this.filter.filterSteps);
  }

  get FilterOperations(): Observable<Operation[]> {
    return of(OPERATIONS_MOCK);
  }

  getFilterStepEvent(filterStepId: number): FilterEvent | undefined {
    let filterStep = this.filter.filterSteps.find((filterStep) => filterStep.id === filterStepId)
    return filterStep?.selectedEvent;
  }

  getFilterStep(filterStepId: number): FilterStep | undefined {
    let filterStep = this.filter.filterSteps.find((filterStep) => filterStep.id === filterStepId)
    return filterStep;
  }

  setFilterStepEvent(filterStepId: number, selectedEvent: FilterEvent) {
    this.filter.filterSteps[filterStepId].selectedEvent = selectedEvent;
  }

  addFilterStep() {
    let filterStep = this.filter.filterSteps?.push(new FilterStep(this.newfilterStepId++));
    return filterStep;
  }

  addEventAttributeToFilterStepWithId(filterStepId: number) {
    let filterStep = this.getFilterStep(filterStepId);
    filterStep?.eventAttributes?.push({});
  }

  updateFilterStep(index: number) {
    /* Update Filter step with index */
  }
}
