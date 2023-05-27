import { FC, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import { getNavigateTo } from 'src/store/selectors'
import { STContainer, STChildren } from './styled'

export const LayoutContainer: FC = (props) => {
  const history = useHistory()
  const navigateTo = useSelector(getNavigateTo)

  // navigate route in redux
  useEffect(() => {
    if (navigateTo) {
      history.push(navigateTo)
    }
  }, [navigateTo, history])

  return (
    <STContainer>
      <STChildren>
        {props.children}
      </STChildren>
    </STContainer>
  )
}
