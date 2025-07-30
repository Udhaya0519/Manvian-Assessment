import { users } from "./user.controller.js";
import { v4 as uuid } from "uuid";

const leaveRequests = [];

export const applyLeave = (req, res) => {
   const { email, fromDate, toDate, reason } = req.body;

   if (!fromDate || !email || !toDate || !reason) {
      return res
         .status(400)
         .json({ success: false, message: "Please provide all fields!" });
   }

   const user = users.find((user) => user.email == email);

   if (!user) {
      return res
         .status(400)
         .json({
            success: false,
            message: "Enter valid mail id | User not found",
         });
   }

   const alreadyApplied = leaveRequests.find(
      (request) => request.userId == user.id
   );

   if (alreadyApplied) {
      return res
         .status(400)
         .json({ success: false, message: "you have a pending request, try after resolved" });
   }

   const appliedOn = new Date().toISOString().split("T")[0];

   const leaveRequest = {
      id: uuid(),
      userId: user.id,
      fromDate,
      toDate,
      reason,
      appliedOn,
   };

   leaveRequests.push(leaveRequest);

   return res
      .status(201)
      .json({
         success: true,
         message: "Leave applied successfully",
         leaveRequest,
      });
};

export const getLeaveRequests = (req, res) => {
   return res.status(200).json({ leaveRequests });
};
