export interface UsecasePort<T, Y = any>{
  execute(params: UsecasePort.Params<T>): Promise<void>
}

export namespace UsecasePort{
  export type Params<T> = {
    data: T
  }
} 