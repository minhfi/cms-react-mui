import { styled } from '@mui/material'
import { INavLinkProps } from '.'
import { NavLink } from 'react-router-dom'

export const STAside = styled('div', {
  name: 'Aside'
})(({ theme }) => `
  width: 300px;
  min-width: 300px;
  height: 100vh;
  overflow: auto;
  box-sizing: border-box;
  padding: ${theme.spacing(5, 4)};
  background-color: ${theme.colors['--color-neutral-900']} !important;

  display: flex;
  flex-direction: column;

  @media (max-width: 1024px) {
    width: 111px;
    min-width: 111px;
    padding: 40px 24px;
  }
`)

export const STAsideItem = styled(NavLink, {
  shouldForwardProp: prop => prop !== 'active',
  name: 'AsideItem'
})<INavLinkProps>(({ theme, ...props }) => `
  width: 100%;
  height: 60px; 
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 12px;
  padding: ${theme.spacing(2)};
  margin-bottom: ${theme.spacing(1)};
  box-sizing: border-box;
  cursor: pointer;
  color: ${props.active ? theme.colors['--color-neutral-100'] : theme.colors['--color-neutral-300']};
  background: ${props.active ? theme.colors['--color-neutral-600'] : 'unset'};
  
  svg {
    margin-right: ${theme.spacing(2)};

    path {
      fill: ${props.active ? theme.colors['--color-neutral-100'] : theme.colors['--color-neutral-300']};
    }
  }

  &:last-child {
    margin-bottom: 0
  }

  &:hover {
    color: ${theme.colors['--color-white']};

    svg {
      path {
        fill: ${theme.colors['--color-white']};
      }
    }
  }
  

  @media (max-width: 1024px) {
    svg {
      margin-right: unset;
    }

    justify-content: center;

    div div {
      display: none;
    }

    div span {
      display: none;
    }

    background-color: ${props.active ? theme.colors['--color-neutral-600'] : 'unset'};
  }
`)
