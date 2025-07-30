import express from 'express'
import { userRoutes } from './routes/user.route.js';
import { leaveRoutes } from './routes/leave.route.js';



const app = express();


app.use(express.json());

app.use("/users", userRoutes);
app.use("/api/leave", leaveRoutes);


app.get("/", (req,res) => {
    res.json({message: "server running successfully"})
})

export default app;