"use strict";

function App() {
  const name = "Matt";

  return (
    <div>
      <FirstComponent />
      <NamedComponent name={name} />
    </div>
  );
}