import { RouteProps } from 'react-router'

export interface IRouterOption {
  path: string
  component: RouteProps['component']
  name?: string
  exact?: boolean
  isRequired?: boolean
}
