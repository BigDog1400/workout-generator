import React from "react";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./styles.module.scss";
import { connect } from "react-redux";
import { changeType } from "../../redux/type/action";
const SelectorLevelRoutine = ({ typeTraining, changeType, handleOnChange }) => {
  console.log(typeTraining);
  const handleChangeDifficult = (type) => {
    console.log(type, "[dispatch]");
    changeType(type);
  };
  return (
    <div className={styles.SelectorLevelRoutine}>
      <div className={styles.SelectorLevelRoutineLevel}>
        <FontAwesomeIcon
          icon={faChevronRight}
          className={styles.SelectorLevelRoutineLevel__labelIcon}
        />
        <span
          className={styles.SelectorLevelRoutineLevel__label}
          onClick={() => handleChangeDifficult("easy")}
        >
          FACIL
        </span>
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

const mapStateToProps = ({ typeTraining }) => {
  return {
    typeTraining: typeTraining
  };
};

export default connect(mapStateToProps, {
  changeType
})(SelectorLevelRoutine);
