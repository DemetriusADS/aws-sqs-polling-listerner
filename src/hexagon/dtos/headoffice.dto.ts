import { ActionTypeEnum } from 'aws-sdk/clients/elbv2'

export interface HeadofficeDTO{
  customerId: string
  actionType: ActionTypeEnum
  source: string
}