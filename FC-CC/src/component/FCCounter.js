import React, { useEffect } from "react";
import { useState } from "react";

function FCCounter() {
  let [score, setScore] = useState(0);
  let [age, setAge] = useState(0);

  useEffect(() => {
    console.log("On component loads");
  }, []);

  useEffect(() => {
    console.log("On component unloaded");
  }, []);

  useEffect(() => {
    console.log("On score variable loads");
  }, [score]);

  useEffect(() => {
    console.log("On age variable loads");
  }, [age]);

  useEffect(() => {
    console.log("On score or age variables loads");
  }, [score,age]);

  useEffect(() => {
    console.log("On any variables loads");
  });



  return (
    <div className="fc">
      <h1>FC Component</h1>
      <h1> Score : {score}</h1>
      <button
        onClick={() => {
          setScore(score + 1);
        }}
      >
        +
      </button>

      <button
        onClick={() => {
          setScore(score - 1);
        }}
      >
        -
      </button>

      <h1> Age : {age}</h1>
      <button
        onClick={() => {
          setAge(age + 1);
        }}
      >
        +
      </button>

      <button
        onClick={() => {
          setAge(age - 1);
        }}
      >
        -
      </button>
    </div>
  );
}

export default FCCounter;
