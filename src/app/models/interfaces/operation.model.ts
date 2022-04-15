import { EOperationDataType } from "../enums/number-operation-type.enum";

export interface Operation {
  dataType: EOperationDataType;
  name: String;
  numberOfInputs: number;
  operationFunction: (arg0: any) => any;
}
