import { EventAttribute } from "./event-attribute.model";

export interface Filter {
  event: Event;
  eventAttributes: EventAttribute[];
}
