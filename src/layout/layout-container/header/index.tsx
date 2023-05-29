import { FC } from 'react'
import { useDispatch } from 'react-redux'
import { Typography } from '@mui/material'
import { Button } from 'src/components/button'
import { AUTH_LOGOUT } from 'src/store/types'
import { STHeader } from './styled'

const Header:FC = () => {
  const dispatch = useDispatch()

  const handleLogout = () => dispatch({ type: AUTH_LOGOUT })

  return (
    <STHeader>
      <Typography variant="h5">Page title</Typography>
      <Button order="secondary" onClick={handleLogout}>Logout</Button>
    </STHeader>
  )
}

export default Header
