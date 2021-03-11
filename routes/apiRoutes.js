const Workout = require("../models/workout.js");

module.exports = function (app) {
    app.get("/api/workouts", (req, res) => {
        Workout.find({})
            .then(dbWorkout => {
                res.json(dbWorkout)
            })
            .catch(err => {
                res.json(err)
            })
    })

    app.get("/api/workouts/range", (req, res) => {
        Workout.find({})
            .then(dbWorkout => {
                res.json(dbWorkout)
            })
            .catch(err => {
                res.json(err)
            })
    })


    app.post("/api/workouts/range", (req, res) => {
        Workout.create({})
            .then(dbWorkout => {
                res.json(dbWorkout)
            })
            .catch(err => {
                res.json(err)
            })
    })

    app.post("/api/workouts", (req, res) => {
        Workout.create({})
            .then(dbWorkout => {
                res.json(dbWorkout)
            })
            .catch(err => {
                res.json(err)
            })
    })

    app.put("/api/workouts/:id", (req, res) => {
        Workout.findByIdAndUpdate(req.params.id, 
        {$push: {exercises: req.body}},
        {new: true })
            .then(dbWorkout => {
                res.json(dbWorkout)
            })
            .catch(err => {
                res.json(err)
            })
    })


}