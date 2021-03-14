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
        const duration = new Workout(req.body)
        duration.totalDuration();
        Workout.create(duration)
            .then(dbWorkout => {
                res.json(dbWorkout)
            })
            .catch(err => {
                res.json(err)
            })
    })

    app.post("/api/workouts", (req, res) => {
        const duration = new Workout(req.body)
        duration.totalDuration();

        Workout.create(duration)
            .then(dbWorkout => {
                res.json(dbWorkout)
            })
            .catch(err => {
                res.json(err)
            })
    })

    app.put("/api/workouts/:id", ({body, params}, res) => {
        Workout.findByIdAndUpdate(params.id, 
        {$push: {exercises: body}},
        {new: true })
            .then(dbWorkout => {
                res.json(dbWorkout)
            })
            .catch(err => {
                res.json(err)
            })
    })


}