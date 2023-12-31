import { Schema, model } from "mongoose";
import { IUser, UserModel } from "./user.interface";

const UserSchema = new Schema<IUser, UserModel>({
    email: {type: String, required: true},
    password: {type: String, required: true},
})

export const User = model<IUser, UserModel>("User", UserSchema)