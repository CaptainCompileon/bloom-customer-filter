import { Operation } from "./operation.model";

export interface EventAttribute {
  eventPropertyKey: string;
  operation: Operation;
  values: any[];
}
