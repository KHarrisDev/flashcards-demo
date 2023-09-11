// Create the UI from scratch and apply the CSS that will indicate change in the UI.
// After creating the UI, use a conditional operator to change the class of the CSS.
// Create a piece of state that will track the change of the CSS.
//  - define the state
//  - use the state variable
//  - update the state
// useState to change the selected div that is mapped out.
// Hard code the initial state an set it equal to the ID of an object in the array.
// The map() method puts all object in the array in a div.
// Every div has an ID so we set the state to the ID and create a condition that will display the answer if the ID of the state matches a mapped objects ID.
// We do the same thing for the CSS to indicate what the answer is in the UI.
// To update the state, pass the ID of the mapped div to an onClick handler and set the state in that function.

import { useState } from "react";
const { v4: uuidv4 } = require("uuid");
const questions = [
  {
    id: uuidv4(),
    // id: 1,
    question: "What language is React based on?",
    answer: "JavaScript",
  },
  {
    id: uuidv4(),
    // id: 2,
    question: "What are the building blocks of React apps?",
    answer: "Components",
  },
  {
    id: uuidv4(),
    // id: 3,
    question: "What's the name of the syntax we use to describe a UI in React?",
    answer: "JSX",
  },
  {
    id: uuidv4(),
    // id: 4,
    question: "How to pass data from parent to child components?",
    answer: "Props",
  },
  {
    id: uuidv4(),
    // id: 5,
    question: "How to give components memory?",
    answer: "useState hook",
  },
  {
    id: uuidv4(),
    // id: 6,
    question:
      "What do we call an input element that is completely synchronised with state?",
    answer: "Controlled element",
  },
  {
    id: uuidv4(),
    // id: 7,
    question: "What's the first step to building the UI to a react applcation?",
    answer:
      "Build the UI from scratch by including classes that style the UI, static data & static state (const/let) and logic that statically renders the component view.",
  },
  {
    id: uuidv4(),
    // id: 8,
    question: "What's the proper way to add event listeners in React?",
    answer:
      "Pass the callback() (onClick={callback}) in the event handler so it can point to the callback function. Passing a callback function as if it's being called (onClick={callback()}) will immediately call the function.",
  },
  // {
  //   id: uuidv4(),
  //   question: "",
  //   answer: "",
  // },
];

export default function App() {
  return (
    <div>
      <Flashcards />
    </div>
  );
}

const Flashcards = () => {
  const [selectedID, setSelectedID] = useState(null);

  const handleAnswerToQuestion = (id) => {
    setSelectedID(id !== selectedID ? id : null);
  };

  return (
    <div className="flashcards">
      {questions.map((question) => (
        <div
          key={question.id}
          className={selectedID === question.id ? "selected" : ""}
          onClick={() => handleAnswerToQuestion(question.id)}
        >
          {selectedID === question.id ? question.answer : question.question}
        </div>
      ))}
    </div>
  );
};
