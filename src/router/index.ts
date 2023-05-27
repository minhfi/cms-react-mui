import { IRouterOption } from 'src/interfaces'
import { AuthRoutes } from 'src/modules/auth/routes'
import { NotFound } from 'src/modules/core/components/404'
import { CoreRoutes } from 'src/modules/core/routes'
import { HomeRoutes } from 'src/modules/home/routes'

export const routes: IRouterOption[] = [
  ...AuthRoutes,
  ...HomeRoutes,
  ...CoreRoutes,

  // last route handle 404 error
  {
    path: '*',
    component: NotFound
  }
]
