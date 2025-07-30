import express from 'express'
import { userRoutes } from './routes/user.route.js';
import { leaveRoutes } from './routes/leave.route.js';



const app = express();


app.use(express.json());

app.use("/users", userRoutes);
app.use("/api/leave", leaveRoutes);


const PORT = 3000;

app.listen(PORT, () => {
    console.log("Server running at port", PORT);
    
})