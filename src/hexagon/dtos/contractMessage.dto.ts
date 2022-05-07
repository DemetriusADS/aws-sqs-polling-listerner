import { ContractItemsDTO } from './contractItems.dto'

export interface ContractMessageDTO {
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
