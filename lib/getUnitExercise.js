import { capital_letter } from "./capitalizeWord";

export function getUnitExercise(unit, amount) {
  if (amount === 0) {
    return unit === "seconds" ? "Max Hold" : "Max Reps";
  } else {
    return unit === "seconds"
      ? `${amount} ${capital_letter(unit)}`
      : `${amount} ${capital_letter(unit)}`;
  }
}
