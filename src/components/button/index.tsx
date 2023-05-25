import { ChangeEvent, FC, useMemo } from 'react'
import { ButtonProps } from '@mui/material'
import { ButtonPrimary, ButtonSecondary } from './styled'

export interface IButtonProps extends ButtonProps {
  order?: 'primary' | 'secondary'
  width?: number
  height?: number
  background?: string
  colorText?: string
  handleChange?: (e: ChangeEvent<HTMLInputElement>) => void
}

export const Button: FC<IButtonProps & ButtonProps<'span', { component?: 'span' }>> = ({ width, height, order, colorText, ...props }) => {
  const VIEW = useMemo(() => {
    switch (order) {
      case 'secondary':
        return (
          <ButtonSecondary
            width={width}
            height={height}
            colorText={colorText}
            {...props}
          >
            {props.children}
          </ButtonSecondary>
        )
      default:
        return (
          <ButtonPrimary
            width={width}
            height={height}
            colorText={colorText}
            {...props}
          >
            {props.children}
          </ButtonPrimary>
        )
    }
  }, [width, height, order, props])

  return VIEW
}

Button.defaultProps = {
  order: 'primary',
  height: 40
}
