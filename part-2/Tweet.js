"use strict";

function Tweet({ authorUsername, authorName, date, message }) {
  return (
    <div className="card border-primary mb-3">
      <h3>{message}</h3>
      <p>By {authorName} (@{authorUsername})</p>
      <p>Date: {date}</p>
    </div>
  )
}