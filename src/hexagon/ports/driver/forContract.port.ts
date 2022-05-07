import { ContractDTO } from '../../dtos';
import { UsecasePort } from './usecase.port';

export interface forContractPort{
  execute(params: UsecasePort<ContractDTO>): Promise<void>
}