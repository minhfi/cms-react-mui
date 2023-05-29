import axios from 'axios'
import { IUserModel, TAxiosResponseData } from 'src/interfaces'

export class ProfileApi {
  static _prefix = '/api/v1/users'

  static detail(): TAxiosResponseData<IUserModel> {
    return axios.get(`${this._prefix}/user-profile`)
  }
}
