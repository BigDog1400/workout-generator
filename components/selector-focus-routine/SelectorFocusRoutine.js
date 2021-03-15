import React from "react";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./styles.module.scss";
import { typeTrainings } from "../../constants/typeTrainings";
const SelectorFocusRoutine = ({ handleOnChange }) => {
  return (
    <div className={styles.SelectorFocusRoutine}>
      {typeTrainings.map((type) => (
        <div className={styles.SelectorFocusRoutineFocus}>
          <FontAwesomeIcon
            icon={faChevronRight}
            className={styles.SelectorFocusRoutineFocus__labelIcon}
          />
          <span className={styles.SelectorFocusRoutineFocus__label}>
            {type.label}
          </span>
        </div>
      ))}
    </div>
  );
};

export default SelectorFocusRoutine;
