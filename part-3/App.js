"use strict";

function App() {
  return (
    <div>
      <Person
        name="Matt"
        age="27"
        hobbies={['music', 'running', 'reading']}/>
      <Person
        name="Beetlejuice"
        age="500"
        hobbies={['being scary', 'haunting']}/>
      <Person
        name="Ringo"
        age="80"
        hobbies={['Drumming', 'being cool']}/>
      <Person
        name="Teenager"
        age="17"
        hobbies={['sulking', 'being cool']}/>
    </div>
  )
}