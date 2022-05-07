import { HeadofficeDTO } from '../../dtos';
import { UsecasePort } from './usecase.port';

export interface forHeadofficePort{
  execute(params: UsecasePort<HeadofficeDTO>): Promise<void>
}