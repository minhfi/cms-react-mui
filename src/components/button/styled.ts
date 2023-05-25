import { css, styled } from '@mui/material/styles'
import { Button } from '@mui/material'
import { IButtonProps } from '.'

const ButtonBase = styled(Button)<IButtonProps>(({ theme, ...props }) => css`
  width: ${props.width ? props.width + 'px' : 'auto'};
  height: ${props.height}px;

  ${{ ...theme.typography.body2 }};
  
  padding: ${theme.spacing(0, 2)};
  text-transform: unset;
  border-radius: 16px;

  &.MuiButton-fullWidth {
    width: 100% !important
  }
`)

export const ButtonPrimary = styled(ButtonBase, {
  label: 'Button',
  shouldForwardProp: prop => prop !== 'colorText'
})<IButtonProps>(({ theme, ...props }) => `
  color: ${props.colorText || `${theme.colors['--color-neutral-700']} !important`};
  background-color: ${props.background || `${theme.colors['--color-primary-400']} !important`} ;

  &:hover {
    background-color: ${props.background || `${theme.colors['--color-primary-300']} !important`} ;
  }

  &:focus {
    background-color: ${props.background || `${theme.colors['--color-primary-300']} !important`} ;
  }

  &:active {
    background-color: ${props.background || `${theme.colors['--color-primary-400']} !important`} ;
  }

  &:disabled {
    color: ${theme.colors['--color-white']} !important;
    background-color: ${theme.colors['--color-neutral-200']} !important;
  }
`)

export const ButtonSecondary = styled(ButtonBase, {
  label: 'Button',
  shouldForwardProp: prop => prop !== 'colorText'
})<IButtonProps>(({ theme }) => `
color: ${theme.colors['--color-neutral-700']} !important;
background-color: transparent !important;

&:hover {
  background-color: ${theme.colors['--color-neutral-100']} !important;
}

&:focus {
  background-color: ${theme.colors['--color-neutral-100']} !important;
}

&:active {
  background-color: ${theme.colors['--color-neutral-200']} !important;
}

&:disabled {
  color: ${theme.colors['--color-neutral-200']} !important;
}
`)
