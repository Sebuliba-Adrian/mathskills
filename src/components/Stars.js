import React from "react";

export default () => {
  const numberOfStars = 1 + Math.floor(Math.random() * 9);
  let stars = [];

  for (let i = 0; i < numberOfStars; i++) {
    stars.push(<i key={i} className="fa fa-star" />);
  }
  return (
    <div className="col-5">
      <i className="fa fa-star">{stars}</i>
    </div>
  );
};
