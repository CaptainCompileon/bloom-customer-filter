import { FilterEvent } from '../models/interfaces/event.model'

export const EVENTS_MOCK: FilterEvent[] = [
  {
    id: 1,
    name: 'event1',
    properties: {
      price: 1,
      number_of_items: 3
    }
  },
  {
    id: 2,
    name: 'event2',
    properties: {
      price: 8,
      number_of_items: 5
    }
  },
  {
    id: 3,
    name: 'event3',
    properties: {
      price: 5,
      number_of_items: 4
    }
  },
]
