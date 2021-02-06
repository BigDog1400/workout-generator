import React from "react";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SelectorLevelRoutine = ({ handleOnChange }) => {
  return (
    <div className='container-selector-level-routine'>
      <div className='container-selector-level-routine__level'>
        <FontAwesomeIcon icon={faChevronRight} className='nombrePrueba' />
        <span className='routine-level__label'>FACIL</span>
      </div>
      <div className='container-selector-level-routine__level'>
        <span className='routine-level__label'>INTERMEDIO</span>
      </div>
      <div className='container-selector-level-routine__level'>
        <span className='routine-level__label'>DIFICIL</span>
      </div>
      <style jsx>
        {`
          .container-selector-level-routine {
            height: 100%;
            display: flex;
            flex-flow: column;
            justify-content: space-around;
          }
          .container-selector-level-routine__level {
            cursor: pointer;
            display: flex;
            flex-flow: row;
            align-items: center;
          }
          .routine-level__label:hover {
            color: #fe0d15;
          }
          .routine-level__label {
            font-family: "Lato", sans-serif;
            font-size: 3.5rem;
            font-weight: bold;
            color: #333;
          }
          .container-selector-level-routine__level :global(.nombrePrueba) {
            height: 3rem;
            position: absolute;
            transform: translate(-120%, 10%);
            color: #333;
          }
        `}
      </style>
    </div>
  );
};

export default SelectorLevelRoutine;
