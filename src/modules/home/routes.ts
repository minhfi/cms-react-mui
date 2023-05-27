import { IRouterOption } from 'src/interfaces'
import Home from '.'

export const HomeRoutes: IRouterOption[] = [
  {
    path: '/home',
    exact: true,
    component: Home,
    isRequired: true
  }
]
