import { FC, useCallback, useState, HTMLInputTypeAttribute } from 'react'
import { Box, IconButton, InputAdornment, SxProps, TextFieldProps, Typography, useTheme } from '@mui/material'

import { TextField, TextInput } from './styled'
import { IconVisibility, IconVisibilityOff } from 'src/assets/icons'

export interface InputBaseProps {
  type?: HTMLInputTypeAttribute
  name?: string
  label?: string
  required?: boolean
  error?: string
  mb?: number
  sx?: SxProps
}

export type InputProps = InputBaseProps & Omit<TextFieldProps, 'error'>

export const Input: FC<InputProps> = ({ label, error, mb, required, ...props }) => {
  const theme = useTheme()
  const [showPassword, setShowPassword] = useState<boolean>(false)
  const toggleShowPassword = useCallback(() => setShowPassword(!showPassword), [showPassword])

  const type = props.type === 'password' && !showPassword ? 'password' : 'text'
  const InputProps = props.type === 'password'
    ? {
        endAdornment: (
          <InputAdornment position="end">
            <IconButton
              aria-label="Toggle password visibility"
              onClick={toggleShowPassword}
              onMouseDown={toggleShowPassword}
            >
              {showPassword ? <IconVisibility/> : <IconVisibilityOff/>}
            </IconButton>
          </InputAdornment>
        )
      }
    : props.InputProps

  return (
    <TextInput mb={mb} sx={props.sx}>
      {label && (
        <Typography variant="body1" sx={{ marginBottom: '8px' }}>
          {label} {required && <Typography component="span" variant="body2" color={theme.colors['--color-negative-500']}>*</Typography>}
        </Typography>
      )}

      <TextField
        {...props}
        type={type}
        error={!!error}
        InputProps={InputProps}
      />

      {error && (
        <Box mt={1}>
          <Typography variant="body2" color={theme.colors['--color-negative-500']}>{error}</Typography>
        </Box>
      )}
    </TextInput>
  )
}

Input.defaultProps = {
  type: 'text',
  mb: 2
}
