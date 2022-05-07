import { ActionTypeEnum, DomainTypeEnum } from '../enums';
import { ContractMessageDTO } from "./";

export interface MessageDTO {
  actionType: ActionTypeEnum;
  customerId: string;
  source: string;
  domainType: DomainTypeEnum;
  data?: ContractMessageDTO;
}
