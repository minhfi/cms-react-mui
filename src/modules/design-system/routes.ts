import { IRouterOption } from 'src/interfaces'
import DesignSystem from '.'

export enum EDesignSystemRoutes {
  DESIGN_SYSTEM = 'DesignSystem'
}

export const DesignSystemRoutes: IRouterOption[] = [
  {
    path: '/design-system',
    exact: true,
    name: EDesignSystemRoutes.DESIGN_SYSTEM,
    component: DesignSystem,
    meta: {
      requireAuth: true
    }
  }
]
