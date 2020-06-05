import React from "react";

function Card({ name, email, id }) {
  return (
    <div className="tc br4 dib bg-light-yellow grow ma3 pa3 shadow-4">
      <img src={`https://robohash.org/${id}?size=200x200`} alt="roboPhoto" />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
}

export default Card;
