"use strict";

function Person({ name, age, hobbies }) {
  return (
    <div>
      <p>Learn some information about this person.</p>
      <p>Name: {name.slice(0,6)}</p>
      <p>Hobbies:</p>
      <ul>
        {hobbies.map((h) => <li>{h}</li>)}
      </ul>
      <h1>{age > 18 ? "Please go vote!" : "you must be 18"}</h1>
    </div>
  );
}