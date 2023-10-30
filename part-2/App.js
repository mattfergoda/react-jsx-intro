"use strict";

function App() {
  return (
    <div className="">
      <Tweet
      authorUsername="mattfergoda"
      authorName="Matt Fergoda"
      date="10/30/23"
      message="My first Tweet"/>

    <Tweet
      authorUsername="RockyB"
      authorName="Barack Obama"
      date="10/30/23"
      message="This is way better than X."/>

    <Tweet
      authorUsername="someoneelse"
      authorName="Idk Who"
      date="10/30/23"
      message="Here are my thoughts."/>
    </div>
  );
}