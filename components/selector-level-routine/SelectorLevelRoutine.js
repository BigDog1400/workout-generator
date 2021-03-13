import React from "react";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./styles.module.scss";

const SelectorLevelRoutine = ({ handleOnChange }) => {
  return (
    <div className={styles.SelectorLevelRoutine}>
      <div className={styles.SelectorLevelRoutineLevel}>
        <FontAwesomeIcon
          icon={faChevronRight}
          className={styles.SelectorLevelRoutineLevel__labelIcon}
        />
        <span className={styles.SelectorLevelRoutineLevel__label}>FACIL</span>
      </div>
      <div className={styles.SelectorLevelRoutineLevel}>
        <span className={styles.SelectorLevelRoutineLevel__label}>
          INTERMEDIO
        </span>
      </div>
      <div className={styles.SelectorLevelRoutineLevel}>
        <span className={styles.SelectorLevelRoutineLevel__label}>DIFICIL</span>
      </div>
    </div>
  );
};

export default SelectorLevelRoutine;
