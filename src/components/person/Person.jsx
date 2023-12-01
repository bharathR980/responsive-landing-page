import "../../styles/Person.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import PersonCard from "./PersonCard";

function Person() {
  const [persons, setPersons] = useState();
  const [error, setError] = useState("");
  const getUserInformations = () => {
    axios
      .get("https://randomuser.me/api/?page=3&results=12")
      .then((response) => {
        setPersons(response.data.results);
        setError("");
      })
      .catch((error) => {
        window.alert("Failed to retreive data..!");
        setError("Error while fetching data..!");
      });
  };
  useEffect(() => {
    getUserInformations();
  }, []);
  return (
    <div className="container">
      <div className="title">
        <div className="page-title">Experts and Staff</div>
        <button className="refresh-button" onClick={getUserInformations}>
          Refresh
        </button>
      </div>
      <div className="divider"></div>
      <div className="person-container">
        {error.length === 0 &&
          persons?.map((person) => {
            return <PersonCard person={person} />;
          })}
        {error.length > 0 && <div>{error}</div>}
      </div>
    </div>
  );
}

export default Person;
