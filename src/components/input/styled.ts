import { css, styled } from '@mui/material/styles'
import { Box, TextField as MuiTextField } from '@mui/material'

export const TextField = styled(MuiTextField, { label: 'TextFieldCustom' })(({ theme }) => css`
  ${{ ...theme.typography.body1 }};

  .MuiFormHelperText-root {
    margin: ${theme.spacing(1)} 0 0;
  }


  div.MuiInputBase-root {
    border: 1px solid ${theme.colors['--color-gray-500']};
    border-radius: 8px;
    color: ${theme.colors['--color-black']};
    background-color: ${theme.colors['--color-white']};

    input {
      padding: ${theme.spacing(1, 2)};
      
      &::placeholder {
        color: ${theme.colors['--color-gray-600']};
      }
    }
  }

  .MuiInputAdornment-positionStart {
    margin-right: 0
  }

  .MuiOutlinedInput-root {
    fieldset {
      border-color: transparent;
      border-width: 1px !important;
      border-radius: 8px !important;
    }

    &:hover,
    &.Mui-focused {
      fieldset.MuiOutlinedInput-notchedOutline {
        border-color: transparent;
      }
    }

    &.Mui-error {
      fieldset.MuiOutlinedInput-notchedOutline {
        border-color: ${theme.colors['--color-red-600']};
      }
    }
  }
`)

export const TextInput = styled(Box, {
  shouldForwardProp: prop => prop !== 'mb',
  label: 'TextInput'
})<{mb?: number}>(({ theme, ...props }) => `
  display: flex;
  flex-direction: column;
  margin-bottom: ${theme.spacing(props.mb || 0)};
`)
