const Workout = require("../models/workout.js");

module.exports =  function(app){
    app.get("/api/workouts", (req, res) => {
        Workout.find({})
        .then(dbWorkout => {
            res.json(dbWorkout)
        })
        .catch(err => {
            res.json(err)
        })
    })


    

}