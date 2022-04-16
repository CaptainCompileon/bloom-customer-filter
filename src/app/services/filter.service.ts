import { EventAttribute } from './../models/interfaces/event-attribute.model';
import { OPERATIONS_MOCK } from './operations-mock';
import { Operation } from './../models/interfaces/operation.model';
import { FilterStep } from '../models/classes/filter-step.model';
import { Filter } from '../models/classes/filter.model';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { EVENTS_MOCK } from './events-mock';
import { FilterEvent } from '../models/classes/event.model';


@Injectable({
  providedIn: 'root'
})
export class FilterService {

  private filter: Filter;
  private filterStepIdCounter: number;

  constructor() {
    this.filter = new Filter();
    this.filterStepIdCounter = 0;
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

  getFilterStep(filterStepId: number): FilterStep | undefined {
    let filterStep = this.filter.filterSteps.find((filterStep) => filterStep.id === filterStepId)
    return filterStep;
  }

  addFilterStep() {
    this.filter.filterSteps?.push(new FilterStep(this.filterStepIdCounter++));
  }

  copyFilterStep(filterStep: FilterStep) {
    let filterStepCopy: FilterStep = JSON.parse(JSON.stringify(filterStep));
    filterStepCopy.id = this.filterStepIdCounter++;
    this.filter.filterSteps.push(filterStepCopy);
  }

  deleteFilterStep(filterStep: FilterStep) {
    this.filter.filterSteps.splice(this.filter.filterSteps.indexOf(filterStep), 1);
  }

  addEventAttributeToFilterStepWithId(filterStepId: number) {
    let filterStep = this.getFilterStep(filterStepId);
    filterStep?.eventAttributes?.push({});
  }

  discardFilters() {
    let filterSteps = this.filter.filterSteps
    filterSteps.splice(0, filterSteps.length);
    this.filterStepIdCounter = 0;
  }

  updateFilterStep(index: number) {
    /* Update Filter step with index */
  }
}
