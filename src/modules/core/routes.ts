import { IRouterOption } from 'src/interfaces'
import { Forbidden } from './components/403'
import { NotFound } from './components/404'
import { InternalServerError } from './components/500'

export const CoreRoutes: IRouterOption[] = [
  {
    path: '/403',
    exact: true,
    component: Forbidden
  },
  {
    path: '/404',
    exact: true,
    component: NotFound
  },
  {
    path: '/500',
    exact: true,
    component: InternalServerError
  }
]
