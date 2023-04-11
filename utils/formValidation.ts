import { formValuesType } from "../types"

export function validationFunction(values: formValuesType) {
  const errors = { name: '', email: '', password: '' }
  const { name, email, password } = values
  let hasErrors = false

  if (!name) {
    errors.name = 'Name is required'
    hasErrors = true
  }

  if (!email) {
    errors.email = 'Email is required'
    hasErrors = true
  }

  if (!password) {
    errors.password = 'Password is required'
    hasErrors = true
  } else if (password.length < 8) {
    errors.password = 'Password length should be minimum 8 characters'
  }

  return hasErrors ? errors : {}
}
