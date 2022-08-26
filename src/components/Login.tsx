import React from 'react'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import CssBaseline from '@mui/material/CssBaseline'
import TextField from '@mui/material/TextField'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import { useForm } from 'react-hook-form'
import * as Yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { userLogin } from '../redux/features/userActions'
import { useAppDispatch } from '../redux'
import { FormInputText } from './form-components/FormInputText'

interface IFormInput {
  username: string
  password: string
}

const defaultValues = {
  username: 'ali',
  password: '123456',
}

const Login = () => {
  const validationSchema = Yup.object().shape({
    username: Yup.string()
      .required('Username is required')
      .min(6, 'Username must be at least 6 characters')
      .max(20, 'Username must not exceed 20 characters'),
    password: Yup.string()
      .required('Password is required')
      .min(6, 'Password must be at least 6 characters')
      .max(40, 'Password must not exceed 40 characters'),
  })

  const dispatch = useAppDispatch()
  const methods = useForm<IFormInput>({
    defaultValues,
    resolver: yupResolver(validationSchema),
  })
  const {
    register,
    handleSubmit,
    reset,
    control,
    setValue,
    watch,
    formState: { errors },
  } = methods
  const onSubmit = (data: IFormInput) => {
    console.log(data)
    dispatch(userLogin(data))
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Login
        </Typography>
        <Box
          component="form"
          noValidate
          onSubmit={handleSubmit(onSubmit)}
          sx={{ mt: 3 }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <FormInputText
                {...register('username')}
                control={control}
                label="username"
              />
              <div className="invalid-feedback">{errors.username?.message}</div>
            </Grid>
            <Grid item xs={12}>
              <FormInputText
                {...register('password')}
                type="password"
                control={control}
                label="password"
              />
              <div className="invalid-feedback">{errors.password?.message}</div>
            </Grid>
          </Grid>
          <Button
            fullWidth
            variant="contained"
            type="submit"
            sx={{ mt: 3, mb: 2 }}
          >
            Login
          </Button>
        </Box>
      </Box>
    </Container>
  )
}

export default Login
