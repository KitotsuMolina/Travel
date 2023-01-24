export interface UserInterface {
  id: number
  name: string
  email: string
}

export type UserInterfaceAdd = Omit<UserInterface, 'id'>
