const express = require("express");
const { createReservation, getReservation } = require("./database.js");

const app = express();
app.use(express.json());

// Route for callback-based error handling
app.post('/reserve' , (req, res) => {
    createReservation(req.body, (error, result) => {
        if(error){
            return next(new Error(error));
        }    res.status(201).json({ message: "Reservation successful", data: result }); 
        
    });
});

// Route for promise-based error handling (using async/await)
app.get("/reservation/:id", async (req, res) => {
    try {
        const reservation = await getReservation();
        res.status(200).json({ message: "Reservation successful", data: reservation });
    } catch (error) {
        res.status(500).json({ message: error });
    }
});


// Error-handling middleware
app.use((err, req, res, next) => {
    if (err.message.includes("Database")) {
        res.status(500).json({ message: "There was an issue with the database." });
    } else {
        res.status(500).json({ message: "An unexpected error occurred." });
    }
});

// Start the server
app.listen(3000, () => console.log('Server running on port 3000'))