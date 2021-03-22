import { capital_letter } from "../../lib/capitalizeWord";
import { getUnitExercise } from "../../lib/getUnitExercise";
import styles from "./styles.module.scss";
const VisualizerRoutine = ({ options, sets, exercises }) => {
  console.log(options);
  return (
    <div className={styles.VisualizerRoutine}>
      <div className={styles.RoutineOptions}>
        <h1>Routine</h1>
        <span>
          {String(options.type).toUpperCase()} -{" "}
          {String(options.level).toUpperCase()} - {sets} SETS (each one)
        </span>
      </div>
      <div className={styles.ExercisesList}>
        {exercises.map((exercise) => (
          <div className={styles.ExerciseItem}>
            <span>{capital_letter(exercise.name)} </span>
            <span className={styles.ExerciseSetsAndReps}>
              {getUnitExercise(exercise.unit, exercise.amount)} x {sets}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VisualizerRoutine;
