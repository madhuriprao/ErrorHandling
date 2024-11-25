import exp from "constants";
import express from "express";

const app = express();
app.use(express.json());

app.post('/reserve' , (req, res) => {
    createReservation(req.body, (error, result) => {
        if(error){
            return res.status(500).json({message : error});
        } res.status.apply(201).json({message: 'Reservation successful', data : result});
        
    });
});

app.listen(3000, () => console.log('Server running on port 3000'))