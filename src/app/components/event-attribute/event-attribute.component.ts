import { EventAttribute } from './../../models/interfaces/event-attribute.model';
import { Component, Input, OnInit } from '@angular/core';
import { Operation } from 'src/app/models/interfaces/operation.model';
import { FilterEvent } from 'src/app/models/interfaces/event.model';
import { Observable } from 'rxjs';
import { FilterService } from 'src/app/services/filter.service';

@Component({
  selector: 'app-event-attribute',
  templateUrl: './event-attribute.component.html',
  styleUrls: ['./event-attribute.component.scss']
})
export class EventAttributeComponent implements OnInit {

  @Input()
  event?: FilterEvent;
  @Input()
  eventAttribute!: EventAttribute;

  operations$!: Observable<Operation[]>;
  eventProps?: any[];

  constructor(private filterService: FilterService) { }

  ngOnInit(): void {
    this.operations$ = this.filterService.FilterOperations;
    this.eventProps = Object.keys(this.event?.properties)

  }


  onEventPropertySelectedChange() {

  }

  onOperationSelectedChange() {

  }
}
