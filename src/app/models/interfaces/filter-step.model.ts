import { EventAttribute } from "./event-attribute.model";
import { FilterEvent } from "./event.model";

export class FilterStep {
  id!: number;
  selectedEvent?: FilterEvent;
  eventAttributes: EventAttribute[] = [];

  constructor(id: number) {
    this.id = id
  }
}
