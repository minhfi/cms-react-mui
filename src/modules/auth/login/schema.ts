import { object, string } from 'yup'

export const formDataSchema = object().shape({
  email: string()
    .required('This field is required.'),
  password: string()
    .required('This field is required.')
})
