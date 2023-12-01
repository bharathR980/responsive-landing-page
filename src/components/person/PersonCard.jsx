import "../../styles/Person.css";
import React from "react";

function PersonCard({ person }) {
  return (
    <div className="person-information">
      <div className="person-avatar">
        <img src={person.picture.large} alt={person.name.last} />
      </div>
      <div className="person-details">
        <span className="person-name">
          {person.name?.first} {person.name.last}
        </span>
        <span class="person-designation">{person.email}</span>
      </div>
    </div>
  );
}

export default PersonCard;
