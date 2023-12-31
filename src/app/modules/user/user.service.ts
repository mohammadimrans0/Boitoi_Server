import { IUser } from "./user.interface"
import { User } from "./user.model"

const createUser = async (payload: IUser): Promise<IUser | null> => {
  const result = await User.create(payload)
  return result
}

const loginUser = async (payload: IUser): Promise<IUser | null> => {
  const result = await User.findOne({ email: payload.email }, { password: payload.password })

  return result
}

export const UserService = { createUser, loginUser }
