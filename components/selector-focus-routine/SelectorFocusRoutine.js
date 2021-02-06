import React from "react";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SelectorFocusRoutine = ({ handleOnChange }) => {
  return (
    <div className='container-selector-focus-routine'>
      <div className='container-selector-focus-routine__focus'>
        <FontAwesomeIcon icon={faChevronRight} className='nombrePrueba' />
        <span className='routine-focus__label'>TREN SUPERIOR</span>
      </div>
      <div className='container-selector-focus-routine__focus'>
        <span className='routine-focus__label'>TREN INFERIOR</span>
      </div>
      <div className='container-selector-focus-routine__focus'>
        <span className='routine-focus__label'>CUERPO COMPLETO</span>
      </div>
      <style jsx>
        {`
          .container-selector-focus-routine {
            height: 100%;
            display: flex;
            flex-flow: column;
            justify-content: space-around;
          }
          .container-selector-focus-routine__focus {
            cursor: pointer;
            display: flex;
            flex-flow: row;
            align-items: center;
          }
          .routine-focus__label:hover {
            color: #fe0d15;
          }
          .routine-focus__label {
            font-family: "Lato", sans-serif;
            font-size: 3.5rem;
            font-weight: bold;
            color: #333;
          }
          .container-selector-focus-routine__focus :global(.nombrePrueba) {
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

export default SelectorFocusRoutine;
