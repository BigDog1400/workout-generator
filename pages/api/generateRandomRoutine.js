import {
  advanced_lowerbody,
  easy_lowerbody,
  intermediate_lowerbody
} from "../../constants/workouts_collections/lowerbody";
import {
  advanced_upperbody,
  easy_upperbody,
  intermediate_upperbody
} from "../../constants/workouts_collections/upperbody";

const workout_collection = {
  easy: {
    upperbody: easy_upperbody,
    lowerbody: easy_lowerbody,
    fullbody: [...easy_lowerbody, ...easy_upperbody]
  },
  intermediate: {
    upperbody: intermediate_upperbody,
    lowerbody: intermediate_lowerbody,
    fullbody: [...intermediate_upperbody, ...intermediate_lowerbody]
  },
  advanced: {
    upperbody: advanced_upperbody,
    lowerbody: advanced_lowerbody,
    fullbody: [...advanced_upperbody, ...advanced_lowerbody]
  }
};

const getRandomExercises = (workoutsArray) => {
  const indexSelected = [];
  const responseRandomExercises = [];
  while (responseRandomExercises.length < 5) {
    const randomExercise = Math.floor(Math.random() * workoutsArray.length);
    if (!indexSelected.includes(randomExercise)) {
      responseRandomExercises.push(workoutsArray[randomExercise]);
      indexSelected.push(workoutsArray[randomExercise]);
    }
  }
  return responseRandomExercises;
};

export default function userHandler(req, res) {
  const {
    method,
    body: { level, type }
  } = req;
  switch (method) {
    case "POST":
      res.status(200).json({
        options: {
          level: level,
          type: type
        },
        exercises: getRandomExercises(workout_collection[level][type])
      });
      break;
    default:
      res.setHeader("Allow", ["POST"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
