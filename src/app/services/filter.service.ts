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

  addFilterStep(filterStep: FilterStep) {
    let index = this.filter.filterSteps?.push(filterStep) - 1;
    return index;
  }

  updateFilterStep(index: number) {
    /* Update Filter step with index */
  }
}
