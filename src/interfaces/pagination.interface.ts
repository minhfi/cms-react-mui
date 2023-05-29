import { AxiosResponse } from 'axios'

export interface IPaginationQuery {
  page?: number
  pageSize?: number
  [key: string]: any
}

export interface IDataResponse<T> {
  code?: number
  message?: string
  data?: T
}

export interface IErrorResponse {
  code: number
  message: string
}

export type TAxiosResponseData<T = any> = Promise<AxiosResponse<T>>
export type TAxiosResponsePagination<T = any> = Promise<AxiosResponse<IDataResponse<T>>>
export type TAxiosResponseList<T = any> = Promise<AxiosResponse<T[]>>
