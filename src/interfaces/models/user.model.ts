import { IModel } from './model'

export interface IUserModel extends IModel {
  name: string
  phone?: number
}

export interface ICredential {
  accessToken: string
  refreshToken: string
}
