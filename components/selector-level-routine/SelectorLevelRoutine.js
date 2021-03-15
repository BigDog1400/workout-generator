import React, { useEffect } from "react";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./styles.module.scss";
import { connect } from "react-redux";
import { changeType } from "../../redux/type/action";
import { levelTrainings } from "../../constants/levelTrainings";

const SelectorLevelRoutine = ({ typeTrainingSelected, changeType }) => {
  const handleChangeDifficult = (type) => {
    changeType(type);
  };
  return (
    <div className={styles.SelectorLevelRoutine}>
      {levelTrainings.map((level) => (
        <div className={styles.SelectorLevelRoutineLevel}>
          {typeTrainingSelected === level.name ? (
            <FontAwesomeIcon
              icon={faChevronRight}
              className={styles.SelectorLevelRoutineLevel__labelIcon}
            />
          ) : null}
          <span
            className={styles.SelectorLevelRoutineLevel__label}
            onClick={() => handleChangeDifficult(level.name)}
          >
            {level.label}
          </span>
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = ({ typeTraining }) => {
  return {
    typeTrainingSelected: typeTraining.type
  };
};

export default connect(mapStateToProps, {
  changeType
})(SelectorLevelRoutine);
