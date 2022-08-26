import { Controller } from 'react-hook-form'
import TextField from '@mui/material/TextField'
import React from 'react'
import { FormInputProps } from './FormInputProps'

export const FormInputText = React.forwardRef(
  ({ name, control, label, type, className }: FormInputProps, ref) => {
    return (
      <Controller
        name={name}
        control={control}
        render={({
          field: { onChange, value },
          fieldState: { error },
          formState,
        }) => (
          <TextField
            size="small"
            error={!!error}
            onChange={onChange}
            value={value}
            className={className}
            type={type}
            fullWidth
            label={label}
            variant="outlined"
          />
        )}
      />
    )
  }
)
