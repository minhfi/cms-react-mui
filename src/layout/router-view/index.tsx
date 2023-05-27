import { FC } from 'react'
import { Route, Switch, Redirect, useLocation } from 'react-router-dom'

import { StorageUtil } from 'src/utils/storage.util'
import { AUTH_FALLBACK_KEY } from 'src/constants'
import { IRouterOption } from 'src/interfaces'
import { routes } from 'src/router'
import { LayoutContainer } from '../layout-container'
import { useSelector } from 'react-redux'
import { getIsAuthenticated } from 'src/store/selectors'

const AuthRoute: FC<{
  isAuthenticated: boolean | null
  path: string
  exact?: boolean
  component: IRouterOption['component']
}> = (props) => {
  const location = useLocation()

  if (props.isAuthenticated) {
    return (
      <Route
        path={props.path}
        exact={props.exact}
        component={props.component}
      />
    )
  }

  StorageUtil.setItem(AUTH_FALLBACK_KEY, `${location.pathname}${location.search}`)
  return <Redirect to="/"/>
}

export const RouterView: FC = () => {
  const isAuthenticated = useSelector(getIsAuthenticated)

  return (
    <LayoutContainer>
      <Switch>
        {routes.map(item => {
          if (item.meta?.requireAuth) {
            return <AuthRoute key={item.path} {...item} isAuthenticated={isAuthenticated}/>
          }

          return (
            <Route
              key={item.path}
              path={item.path}
              exact={item.exact}
              component={item.component}
            />
          )
        })}
      </Switch>
    </LayoutContainer>
  )
}
