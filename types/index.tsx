export type MenuListType = {
  label: string
  path: string
  sub: {
    label: string
    path: string
  }[]
}

export type formValuesType = {
  name: string
  email: string
  password: string
}
