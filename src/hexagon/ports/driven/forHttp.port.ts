export interface forHttpPort{
  get(params: forHttpPort.Params): Promise<forHttpPort.Response>
  post(params: forHttpPort.Params): Promise<forHttpPort.Response>
}

export namespace forHttpPort{
  export type Params<T = any> = {
    data: T
  }

  export type Response<Y = any> = {
    data: Y
  }
}