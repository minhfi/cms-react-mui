import { FC, SVGProps, useState } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import AcUnitIcon from '@mui/icons-material/AcUnit'
import { Box } from '@mui/material'
import { STAside, STCollapsed, STHeader } from './styled'

interface IMenu {
  title: string
  path: string
  icon?: SVGProps<SVGSVGElement>
  submenu?: IMenu[]
}

const Aside: FC = () => {
  const location = useLocation()
  const history = useHistory()
  const [collapsed, setCollapsed] = useState(false)

  const menus: IMenu[] = [
    {
      title: 'Home',
      path: '/home',
      icon: <AcUnitIcon/>
    },
    {
      title: 'Design system',
      path: '/design-system',
      icon: <AcUnitIcon/>
    },
    {
      title: 'Charts',
      path: '/charts',
      icon: <AcUnitIcon/>,
      submenu: [
        {
          title: 'Pie charts',
          path: '/charts-pie'
        },
        {
          title: 'Line charts',
          path: '/charts-line'
        }
      ]
    }
  ]

  const handleRedirect = (path: string) => {
    console.log(path)
    return history.push(path)
  }

  return (
    <Sidebar width="300px" collapsed={collapsed}>
      <STAside>
        <Box>
          <STHeader>TEMPLATE</STHeader>
          <Menu>
            {menus.map((item) => {
              const menuActive = location.pathname.includes(item.path)

              if (item.submenu) {
                return (
                  <SubMenu
                    key={item.path}
                    label={item.title}
                    icon={item.icon}
                    active={menuActive}
                  >
                    {item.submenu.map((submenu) => {
                      const submenuActive: boolean = location.pathname.includes(
                        submenu.path
                      )

                      return (
                        <MenuItem
                          key={submenu.path}
                          active={submenuActive}
                          icon={submenu.icon}
                          onClick={() => handleRedirect(submenu.path)}
                        >
                          {submenu.title}
                        </MenuItem>
                      )
                    })}
                  </SubMenu>
                )
              }

              return (
                <MenuItem
                  key={item.path}
                  active={menuActive}
                  icon={item.icon}
                  onClick={() => handleRedirect(item.path)}
                >
                  {item.title}
                </MenuItem>
              )
            })}
          </Menu>
        </Box>
        <STCollapsed onClick={() => setCollapsed(!collapsed)}>
          {collapsed ? <ArrowForwardIosIcon/> : <ArrowBackIosIcon/>}
        </STCollapsed>
      </STAside>
    </Sidebar>
  )
}

export default Aside
