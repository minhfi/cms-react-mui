import { IRouterOption } from 'src/interfaces'
import Login from './login'

export enum EAuthRoutes {
  LOGIN = 'Login'
}

export const AuthRoutes: IRouterOption[] = [
  {
    path: '/:type(login)?',
    exact: true,
    name: EAuthRoutes.LOGIN,
    component: Login
  }
]
