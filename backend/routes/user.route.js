import express from 'express'
import { getUsers, userRegistration } from '../controllers/user.controller.js'


export const userRoutes = express.Router()


userRoutes.post("/", userRegistration)

userRoutes.get("/", getUsers)