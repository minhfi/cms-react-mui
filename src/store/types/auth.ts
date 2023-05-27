import { ICredential, IUserModel } from 'src/interfaces/models'

/* authentication actions */
export const AUTH_LOGIN = 'AUTH_LOGIN'
export const AUTH_GET_PROFILE = 'AUTH_GET_PROFILE'
export const AUTH_SET_CREDENTIALS = 'AUTH_SET_CREDENTIALS'
export const AUTH_LOGOUT = 'AUTH_LOGOUT'
export const AUTH_LOGOUT_SUCCESS = 'AUTH_LOGOUT_SUCCESS'
export const AUTH_LOGIN_FAILED = 'AUTH_LOGIN_FAILED'

/**
 * state
 */
export interface IAuthState {
  isAuthenticated: boolean | null
  credentials: ICredential
  profile: IUserModel | null
}

/**
 * actions
 */
export type TAuthAction = {
  type: typeof AUTH_SET_CREDENTIALS | typeof AUTH_LOGOUT_SUCCESS | typeof AUTH_LOGIN_FAILED
  value?: IUserModel | ICredential
}
