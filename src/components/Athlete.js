import React from "react";

function Athlete(props) {
  return (
    <div className="athlete-card">
      <img src={props.athlete.img} alt={props.athlete.name} />
      <div className="athlete-info">
        <h3>{props.athlete.name}</h3>
        <p>
          <strong>{props.athlete.styleWrestling}</strong>
        </p>
        <p>
          <strong>Weight Class:</strong> {props.athlete.weight}
        </p>
      </div>
    </div>
  );
}

export default Athlete;
