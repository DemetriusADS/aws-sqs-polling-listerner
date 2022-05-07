export interface forGraphQLPort{
  request(params:forGraphQLPort.Params): Promise<forGraphQLPort.Response>
}

export namespace forGraphQLPort{
  export type Params<T = any> = {
    query: T
  }

  export type Response<Y = any> = {
    response: Y
  }
}