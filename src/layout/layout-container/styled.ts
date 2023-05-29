import { styled } from '@mui/material'

export const STContainer = styled('section', { label: 'Container' })`
flex: 1 1 auto;
display: flex;
height: 100vh;
`

export const STContent = styled('section', { label: 'Content' })`
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
`

export const STChildren = styled('div', {
  label: 'Content'
})(({ theme }) => `
  height: 100%;
  overflow: auto;
  background-color: ${theme.colors['--color-white']}
`)
