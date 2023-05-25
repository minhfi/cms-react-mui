import { AxiosResponse } from 'axios'

export interface IPaginationQuery {
  page?: number
  pageSize?: number
  [key: string]: any
}

export interface IPaginationResponse<T> {
  code?: number
  message?: string
  data?: T
}

export type TAxiosResponseData<T = any> = Promise<AxiosResponse<T>>
export type TAxiosResponsePagination<T = any> = Promise<AxiosResponse<IPaginationResponse<T>>>
export type TAxiosResponseList<T = any> = Promise<AxiosResponse<T[]>>
