import axios, { AxiosResponse } from 'axios'
import { ICredential, IDataResponse } from 'src/interfaces'

export class AuthApi {
  static _prefix = '/api/v1'

  static login(payload: {
    email: string
    password: string
  }): Promise<AxiosResponse<IDataResponse<ICredential>>> {
    return axios.post(`${this._prefix}/login`, payload)
  }

  static logout(): Promise<AxiosResponse<void>> {
    return axios.delete(`${this._prefix}/logout`)
  }
}
