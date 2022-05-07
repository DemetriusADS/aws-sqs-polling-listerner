import { CustomerDTO } from '../../dtos';
import { UsecasePort } from './usecase.port';

export interface forCustomerPort{
  execute(params: UsecasePort<CustomerDTO>): Promise<void>
}