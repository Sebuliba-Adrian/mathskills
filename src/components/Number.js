import React from 'react';
import _ from 'lodash';

export default props => {
  const arrayOfNumbers = _.range(1, 10);
  const numberClassName = number => {
    if (props.usedNumbers.indexOf(number) >= 0) {
      return "used";
    }
    if (props.selectedNumbers.indexOf(number) >= 0) {
      return "selected";
    }
  };
  return (
    <div className="card text-center">
      <div>
        {arrayOfNumbers.map((number, i) => (
          <span
            key={i}
            className={numberClassName(number)}
            onClick={() => props.selectNumber(number)}
          >
            {number}
          </span>
        ))}
      </div>
    </div>
  );
};
