const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const opts = { toJSON: { virtuals: true } };

const workoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
    },

    exercises: [{
        type: {
            type: String,
            trim: true,
            require: "Enter type of exercise"
        },
        name: {
            type: String,
            trim: true,
            require: "Enter name of exercise"
        },
        duration: {
            type: Number,
            require: "Exercise duration"
        },
        weight: {
            type: Number
        },
        reps: {
            type: Number
        },
        sets: {
            type: Number
        },
        distance: {
            type: Number
        }
    }
    ]
}, opts
)

workoutSchema.virtual("totalDuration").get(function () {
    return this.exercises.reduce((total, exercise) => {
        return total + exercise.duration
    }, 0)
})


const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;