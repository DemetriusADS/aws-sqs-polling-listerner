import { ActionTypeEnum } from '../enums'
import { ContractItemsDTO } from './'

export interface ContractDTO {
  customerId: string
  actionType: ActionTypeEnum
  orderNumber: string
  documentTypeCode: string
  dealerCustomerNumber: string
  salesOrgCode: string
  divisionCode: string
  distributionChannelCode: string
  validFromDate: number
  validToDate: number
  orderItems: ContractItemsDTO[];
}
