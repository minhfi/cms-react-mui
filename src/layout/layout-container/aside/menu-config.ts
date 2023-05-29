// import { FC, SVGProps } from 'react'
// import { IconLikes, IconVibes, IconVibesOutlined, IconLikesFilled } from 'src/icons'

interface MenuConfig {
  title: string
  route: string
  // icon: FC<SVGProps<SVGSVGElement>>
  // activeIcon: FC<SVGProps<SVGSVGElement>>
}

export const menuConfig: MenuConfig[] = [
  {
    title: 'Home',
    route: '/home'
    // icon: IconVibesOutlined,
    // activeIcon: IconVibes
  },
  {
    title: 'Likes',
    route: '/likes'
    // icon: IconLikes,
    // activeIcon: IconLikesFilled
  }
]
