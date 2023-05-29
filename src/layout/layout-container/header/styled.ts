import { styled } from '@mui/material'

export const STHeader = styled('div', {
  name: 'Header'
})(({ theme }) => `
  position: relative;
  z-index: 999;
  width: 100%;
  height: 80px; 
  padding: ${theme.spacing(2, 4)};
  display: flex;
  align-items: center;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  backdrop-filter: blur(20px);
  background-color: ${theme.colors['--color-white']};
  box-shadow: 0px 24px 56px -12px rgb(37 38 46 / 10%)
`)
