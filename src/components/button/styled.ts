import { css, styled } from '@mui/material/styles'
import { Button } from '@mui/material'
import { IButtonProps } from '.'

const ButtonBase = styled(Button)<IButtonProps>(({ theme, ...props }) => css`
  width: ${props.width ? props.width + 'px' : 'auto'};
  height: ${props.height}px;

  ${{ ...theme.typography.body2 }};
  
  padding: ${theme.spacing(0, 2)};
  text-transform: unset;
  border-radius: 8px;

  &.MuiButton-fullWidth {
    width: 100% !important
  }
`)

export const ButtonPrimary = styled(ButtonBase, {
  label: 'Button',
  shouldForwardProp: prop => prop !== 'colorText'
})<IButtonProps>(({ theme, ...props }) => `
  color: ${props.colorText || `${theme.colors['--color-white']}`};
  background-color: ${props.background || `${theme.colors['--color-primary-600']}`};

  &:hover {
    color: ${props.colorText || `${theme.colors['--color-white']}`};
    background-color: ${props.background || `${theme.colors['--color-primary-600']}`};
  }

  &:disabled {
    color: ${theme.colors['--color-gray-600']};
    background-color: ${theme.colors['--color-gray-300']};
  }
`)

export const ButtonSecondary = styled(ButtonBase, {
  label: 'Button',
  shouldForwardProp: prop => prop !== 'colorText'
})<IButtonProps>(({ theme }) => `
  color: ${theme.colors['--color-primary-600']};
  background-color: transparent;

  &:hover {
    background-color: transparent;
  }

  &:focus {
    background-color: transparent;
  }

  &:disabled {
    color: ${theme.colors['--color-gray-600']};
    background-color: ${theme.colors['--color-gray-300']};
  }
`)
