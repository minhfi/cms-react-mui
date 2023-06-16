import { styled } from '@mui/material'

export const STAside = styled('div', { label: 'Aside' })(({ theme }) => `
  height: 100%;
  background: #001529;
  color: ${theme.colors['--color-white']};
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  div.ps-submenu-content {
    background-color: #001529;
  }
  

  a.ps-menu-button {
    opacity: 0.5;
    height: 48px;
    font-size: 14px;
    svg {
      width: 16px;
    }

    &:hover {
      opacity: 1;
      background: unset;
    }
  }

  a.ps-menu-button.ps-active {
    opacity: 1;
  }

  li.ps-submenu-root >a.ps-menu-button.ps-active {
    background: unset;
  }

  a.ps-menu-button.ps-active {
    background: ${theme.colors['--color-primary-600']}
  }

`)

export const STHeader = styled('div', { label: 'Header' })(({ theme }) => `
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${theme.colors['--color-white']}
`)

export const STCollapsed = styled('div', { label: 'Collapsed' })(({ theme }) => `
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${theme.colors['--color-white']};
  background: #002140;
  cursor: pointer;

  svg {
    width: 16px;
    
    path {
      fill: #fff
    }
  }
`)
