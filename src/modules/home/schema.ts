import { object, string } from 'yup'

export const formDataSchema = object().shape({
  name: string()
    .required('This field is required.')
})
