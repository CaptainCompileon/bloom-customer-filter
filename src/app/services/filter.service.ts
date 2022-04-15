import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Event } from '../models/event.model'
import { EVENTS_MOCK } from './events-mock';


@Injectable({
  providedIn: 'root'
})
export class FilterService {

  filters: Filter[] = []

  constructor() { }

  getEvents(): Observable<Event[]> {
    return of(EVENTS_MOCK);
  }
}
