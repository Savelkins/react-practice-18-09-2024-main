import React, { useState } from "react";
import PropTypes from "prop-types";
const namesBibl = ["React", "Vue", "Express", "Bootstrap"];
const languages = [
  "JavaScript",
  "Python",
  "HTML",
  "C++",
  "C#",
  "PHP",
  "CSS",
  "TypeScript",
];
const Quiz = () => {
  const [answer1, setAnswer1] = useState("");
  const changeAnswer1 = (event) => setAnswer1(event.target.value);
  const showRadio = (item) => (
    <label key={item}>
      {" "}
      <input
        type="radio"
        name="question1"
        value={item}
        checked={item === answer1}
        onChange={changeAnswer1}
      />{" "}
      {item}{" "}
    </label>
  );
  const [answer2, setAnswer2] = useState([]);
  const changeAnswer2 = (event) => {
    const value = event.target.value;
    const newArray = answer2.includes(value)
      ? answer2.filter((v) => v !== value)
      : [...answer2, value];
    setAnswer2(newArray);
  };
  const showCheckbox = (item) => (
    <label key={item}>
      {" "}
      <input
        type="checkbox"
        value={item}
        checked={answer2.includes(item)}
        onChange={changeAnswer2}
      />{" "}
      {item}{" "}
    </label>
  );
  const [answer3, setAnswer3] = useState("");
  const changeAnswer3 = (event) => {
    setAnswer3(event.target.value);
  };
  const showOptions = (item) => (
    <option key={item} value={item}>
      {item}
    </option>
  );
  const correctAnswers = {
    answ1: "React",
    answ2: ["CSS", "JavaScript"],
    answ3: "CSS",
  };
  const [score, setScore] = useState(null);
  const checkResault = (item) => {
    let result = 0;
    if (answer1 === correctAnswers.answ1) {
      result++;
    }
    if (answer3 === correctAnswers.answ1) {
      result++;
    }
    if (
      answer2.length === correctAnswers.answ2.lenght &&
      answer2.evety((item) => correctAnswers.answ2.includes(item))
    ) {
      result++;
    }
    setScore(result);
  };
  return (
    <div>
      <fieldset>
        <legend>
          1. Яка бібліотека використовується для створення інтерфейсів?
        </legend>
        {namesBibl.map(showRadio)}
      </fieldset>
      <fieldset>
        <legend>
          2. Якими мовами можна змінити стилі елементів веб-сторінок
        </legend>
        {languages.map(showCheckbox)}
      </fieldset>
      <fieldset>
        <legend>3. Яка мова використовується для опису стилів</legend>
        <select value={answer3} onChange={changeAnswer3}>
          {languages.map(showOptions)}
        </select>
      </fieldset>
      <button onClick={checkResault}>Підрахувати результат{score}</button>
    </div>
  );
};
Quiz.propTypes = {};
export default Quiz;
