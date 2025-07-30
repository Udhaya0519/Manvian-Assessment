import express from 'express'
import { applyLeave, getLeaveRequests } from '../controllers/leave.controller.js'


export const leaveRoutes = express.Router()


leaveRoutes.post("/apply", applyLeave)

leaveRoutes.get("/all", getLeaveRequests)