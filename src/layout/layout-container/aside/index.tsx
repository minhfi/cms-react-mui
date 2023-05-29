import { FC, useEffect, useRef, useState } from 'react'
import { LinkProps, match as Match, match, useHistory } from 'react-router-dom'
import * as H from 'history'
import { Box, Typography } from '@mui/material'
import { menuConfig } from './menu-config'
import { STAside, STAsideItem } from './styled'

export interface INavLinkProps<S = H.LocationState> extends LinkProps<S> {
    activeClassName?: string
    activeStyle?: React.CSSProperties
    exact?: boolean
    strict?: boolean
    isActive?<Params extends { [K in keyof Params]?: string }>(match: match<Params> | null, location: H.Location<S>): boolean
    location?: H.Location<S>
    active?: boolean
  }

const Aside:FC = () => {
  const history = useHistory()
  const timeout = useRef<number | null>(null)
  const [routeActive, setRouteActive] = useState<string | null>(null)

  const handleActiveRoute = (route: string) => {
    if (timeout.current) clearTimeout(timeout.current)

    timeout.current = setTimeout(() => {
      setRouteActive(route)
    }, 100)
  }

  const handleIsActive = (match: Match | null, location: H.Location<any>, route: string) => {
    if (match) {
      handleActiveRoute(route)
    }

    if (location.pathname === '/' && route === '/vibes') {
      handleActiveRoute('/vibes')
    }

    return false
  }

  useEffect(() => {
    // listen change history
    history.listen((location) => {
      if (!menuConfig.some(({ route }) => route === location.pathname)) {
        setRouteActive(null)
      }
    })
  }, [history])

  return (
    <STAside>
      {menuConfig.map(({ route, title }) => {
        const isActive = routeActive === route

        return (
          <STAsideItem
            key={route}
            to={route}
            active={isActive}
            isActive={(match, location) => handleIsActive(match, location, route)}
          >
            <Box display="flex" alignItems="center">
              {/* <Icon width={24}/> */}
              <Typography variant="body1">{title}</Typography>
            </Box>
          </STAsideItem>
        )
      })}
    </STAside>
  )
}

export default Aside
