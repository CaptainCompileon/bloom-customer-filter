import { Filter } from '../models/classes/filter.model';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { EVENTS_MOCK } from './events-mock';
import { FilterEvent } from '../models/interfaces/event.model';


@Injectable({
  providedIn: 'root'
})
export class FilterService {

  filters: Filter;

  constructor() {
    this.filters = new Filter();
  }

  getEvents(): Observable<FilterEvent[]> {
    return of(EVENTS_MOCK);
  }
}
