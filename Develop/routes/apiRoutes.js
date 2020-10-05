import { Router } from "express";
import { Workout } from "../models";
const router = Router();

//get request
router.get("/workouts", (_req, res) => {
  Workout.find({})
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.json(err);
    });
});

//post request
router.post("/workouts", ({ body }, res) => {
  Workout.create(body)
    .then(dbWorkout => {
      res.json(dbWorkout);
    }).catch(err => {
      res.json(err);
    });
});

//put request
router.put("/workouts/:id", (req, res) => {
  Workout.findByIdAndUpdate(
    req.params.id,
    {
      $push: { exercises: req.body },
    },
    { useFindAndModify: false }
  )
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.json(err);
    });
});

//get request
router.get("/workouts/range", (req, res) => {
  Workout.find({}).sort({ day: -1 }).limit(7)
  .then(dbWorkout => {
    res.json(dbWorkout)
  }).catch((err) => {
    res.json(err);
  });
});

export default router;