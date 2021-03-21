import React, { useEffect } from "react";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./styles.module.scss";
import { connect } from "react-redux";
import { changeLevel } from "../../redux/level/actions";
import { levelTrainings } from "../../constants/levelTrainings";

const SelectorLevelRoutine = ({ levelTrainingSelected, changeLevel }) => {
  useEffect(() => {
    changeLevel(levelTrainings[0].name);
  }, [changeLevel]);

  const handleChangeDifficult = (type) => {
    changeLevel(type);
  };
  return (
    <div className={styles.SelectorLevelRoutine}>
      {levelTrainings.map((level) => (
        <div className={styles.SelectorLevelRoutineLevel}>
          {levelTrainingSelected === level.name ? (
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

const mapStateToProps = ({ levelTraining }) => {
  return {
    levelTrainingSelected: levelTraining.level
  };
};

export default connect(mapStateToProps, {
  changeLevel
})(SelectorLevelRoutine);
