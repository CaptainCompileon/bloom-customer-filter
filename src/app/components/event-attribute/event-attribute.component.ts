import { EventAttribute } from './../../models/interfaces/event-attribute.model';
import { Component, Input, OnInit } from '@angular/core';
import { Operation } from 'src/app/models/interfaces/operation.model';
import { FilterEvent } from 'src/app/models/classes/event.model';
import { Observable } from 'rxjs';
import { FilterService } from 'src/app/services/filter.service';
import { EOperationDataType } from 'src/app/models/enums/number-operation-type.enum';

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
    let operation = this.eventAttribute.operation;
    if (operation) {
      if (operation.numberOfInputs < 2) {
        this.eventAttribute.value2 = null;
      }
    }
  }

  get inputType(): string {
    if (this.eventAttribute.operation?.dataType === EOperationDataType.STRING)
      return 'text';
    if (this.eventAttribute.operation?.dataType === EOperationDataType.NUMBER)
      return 'number'
    else return 'text'
  }

  get isNumber(): boolean {
    return this.eventAttribute.operation?.dataType === EOperationDataType.NUMBER
  }
}
