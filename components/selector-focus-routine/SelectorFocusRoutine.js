import React from "react";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./styles.module.scss";
const SelectorFocusRoutine = ({ handleOnChange }) => {
  return (
    <div className={styles.SelectorFocusRoutine}>
      <div className={styles.SelectorFocusRoutineFocus}>
        <FontAwesomeIcon
          icon={faChevronRight}
          className={styles.SelectorFocusRoutineFocus__labelIcon}
        />
        <span className={styles.SelectorFocusRoutineFocus__label}>
          TREN SUPERIOR
        </span>
      </div>
      <div className={styles.SelectorFocusRoutineFocus}>
        <span className={styles.SelectorFocusRoutineFocus__label}>
          TREN INFERIOR
        </span>
      </div>
      <div className={styles.SelectorFocusRoutineFocus}>
        <span className={styles.SelectorFocusRoutineFocus__label}>
          CUERPO COMPLETO
        </span>
      </div>
    </div>
  );
};

export default SelectorFocusRoutine;
