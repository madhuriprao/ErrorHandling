
//error handling //

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
   


//Promise//

