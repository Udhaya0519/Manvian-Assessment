import { v4 as uuid } from "uuid";
import bcryptjs from "bcryptjs";

export const users = [];

export const userRegistration = async (req, res) => {
   const { name, email, password } = req.body;
   if (!name || !email || !password) {
      return res
         .status(400)
         .json({ success: false, message: "Please provide all fields!" });
   }

   const userExist = users.find((user) => user.email == email);

   if (userExist) {
      return res
         .status(400)
         .json({ success: false, message: "User Already Exists!" });
   }

   const hashedPassword = await bcryptjs.hash(password, 10);

   const user = {
      id: uuid(),
      name,
      email,
      password: hashedPassword,
   };

   users.push(user);

   return res
      .status(201)
      .json({
         success: true,
         message: "User registered successfully",
         user: { ...user, password: undefined },
      });
};

export const getUsers = async (req, res) => {
   return res.status(200).json({ users });
};
