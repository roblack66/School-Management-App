import { Router } from "express";
import { getAllUsers, getUserById, loginUser, logOut, registerUser } from "../Controllers/user.js";

const userRouter = Router()

userRouter.post('/users/register', registerUser)
userRouter.post('/users/login', loginUser)
userRouter.post('/users/logout', logOut)
userRouter.get('/users', getAllUsers)
userRouter.get('/users/:id', getUserById)

export default userRouter