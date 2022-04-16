import { EOperationDataType } from '../models/enums/number-operation-type.enum';
import { Operation } from './../models/interfaces/operation.model';

export const OPERATIONS_MOCK: Operation[] = [
  {
    id: 1,
    name: 'operationNumber1',
    dataType: EOperationDataType.NUMBER,
    numberOfInputs: 1,
    operationFunction: (input) => input + 1
  },
  {
    id: 2,
    name: 'operationNumber2',
    dataType: EOperationDataType.NUMBER,
    numberOfInputs: 2,
    operationFunction: ([input1, input2]) => input1 + input2
  },
  {
    id: 3,
    name: 'operationString1',
    dataType: EOperationDataType.STRING,
    numberOfInputs: 1,
    operationFunction: (input) => input + "1"
  },
  {
    id: 4,
    name: 'operationString2',
    dataType: EOperationDataType.STRING,
    numberOfInputs: 2,
    operationFunction: ([input1, input2]) => input1 + input2
  }
]
