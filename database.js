
// Callback-based error handling//

const createReservation = (data, callback) => {
    setTimeout ( () => {
        const error = Math.random()< 0.5? "Database error : Failed to create reservation" : null;
        if(error){
            callback(error, null);
        } else {
            callback(null, { id : Date.now(), ...data});
        }
    }, 1000 );
    }
   


// Promise-based error handling//

const getReservation = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const error = Math.random()< 0.5? "Database error : Failed to create reservation" : null;
            if(error){
                reject(error);
            } else {
                resolve("Table reserved");
            }
    }, 1000 );
 });
};


module.exports = { createReservation, getReservation };

// getReservation()
// .then(success => console.log(success))
// .catch((error)=> console.error("Oops!", error));

