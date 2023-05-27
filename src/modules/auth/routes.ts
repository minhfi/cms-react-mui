import { IRouterOption } from 'src/interfaces'
import Login from './login'

export const AuthRoutes: IRouterOption[] = [
  {
    path: '/:type(login)?',
    exact: true,
    component: Login,
    isRequired: false
  }
]
