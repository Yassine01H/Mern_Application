import express from 'express';
import mongoose from "mongoose";
import dotenv from 'dotenv';
import cors from 'cors';

import categemployeurRouter from "./routes/categemployeurs.route.js"
import EmployeurRouter from "./routes/employeur.route.js";
import userRouter from "./routes/user.route.js"
import Marquevoiture from "./routes/marquevoiture.route.js";
import Voiture from "./routes/voiture.route.js";

import clientRouter from "./routes/client.route.js";
import commandeRouter from "./routes/commande.route.js";
import lignecommandeRouter from "./routes/lignecommande.route.js"; 

 
const app = express();
dotenv.config();
app.use(express.json());
app.use(cors());
// Connexion à la base données
mongoose.connect(process.env.DATABASE,{
useNewUrlParser: true,
useUnifiedTopology: true
})
.then(() => {console.log("Connexion à la base de données réussie");
}).catch(err => {
console.log('Impossible de se connecter à la base de données', err);
process.exit();
});

app.use('/api/categemployeurs', categemployeurRouter);
app.use('/api/employeur', EmployeurRouter);
app.use('/api/marquevoiture', Marquevoiture);
app.use('/api/voiture', Voiture);
app.use('/api/usersa', userRouter);

app.use('/api/users', clientRouter);
app.use('/api/commandes', commandeRouter);
app.use('/api/lignescommandes', lignecommandeRouter);

app.get("/",(req,res)=>{
res.send("Automobile");
});
app.listen(process.env.PORT, () => {
console.log(`Server is listening on port ${process.env.PORT}`); });
