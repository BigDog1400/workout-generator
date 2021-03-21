import React, { useEffect } from "react";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./styles.module.scss";
import { typeTrainings } from "../../constants/typeTrainings";
import { connect } from "react-redux";
import { changeType } from "../../redux/type/actions";
const SelectorFocusRoutine = ({ typeTrainingSelected, changeType }) => {
  useEffect(() => {
    changeType(typeTrainings[0].name);
  }, [changeType]);

  const handleChangeTypeRoutine = (newType) => {
    changeType(newType);
  };
  return (
    <div className={styles.SelectorFocusRoutine}>
      {typeTrainings.map((type, index) => (
        <div className={styles.SelectorFocusRoutineFocus} key={index}>
          {typeTrainingSelected === type.name ? (
            <FontAwesomeIcon
              icon={faChevronRight}
              className={styles.SelectorFocusRoutineFocus__labelIcon}
            />
          ) : null}
          <span
            className={styles.SelectorFocusRoutineFocus__label}
            onClick={() => handleChangeTypeRoutine(type.name)}
          >
            {type.label}
          </span>
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = ({ typeTraining }) => {
  return {
    typeTrainingSelected: typeTraining.name
  };
};

export default connect(mapStateToProps, {
  changeType
})(SelectorFocusRoutine);
