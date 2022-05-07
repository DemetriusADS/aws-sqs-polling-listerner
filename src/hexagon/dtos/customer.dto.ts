import { ActionTypeEnum } from '../enums'


export interface CustomerDTO {
  customerId: string
  actionType: ActionTypeEnum
  source: string
}