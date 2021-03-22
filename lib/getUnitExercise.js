import { capital_letter } from "./capitalizeWord";

export function getUnitExercise(unit, amount) {
  if (amount === 0) {
    return unit === "time" ? "Max Hold" : "Max Reps";
  } else {
    return unit === "time"
      ? `${capital_letter(unit)} ${amount} segs`
      : `${capital_letter(unit)} ${amount} reps`;
  }
}
