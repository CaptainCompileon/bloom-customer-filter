import { EventAttribute } from "./event-attribute.model";

export interface FilterStep {
  selectedEvent?: Event;
  eventAttributes?: EventAttribute[];
}
