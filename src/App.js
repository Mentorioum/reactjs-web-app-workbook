import React from 'react';
import './App.scss';
import { UserPanel } from './components/UserPanel';

function App() {
  const user = {
    firstName: 'Foo',
    lastName: 'Boo',
    avatarUrl: 'https://via.placeholder.com/100x100'
  };

  return (
    <div className="wrapper">
      <h1>ReactJS Workbook</h1>
      <p>Lorem ipsum</p>
      <hr/>
      <h2>Exercise.1</h2>
      <ul>
        <li>
          <code>{`<div/>`}</code>
          <p>Question.1 - Correct</p>
        </li>
        <li>
<code>{`<div>hello</div>`}</code>
          <p>Question.2 - Correct</p>
        </li>
        <li>
          <code>{`<div>hello</div><span>World</span>`}</code>
          <p>Question.3 - Incorrect</p>
          <h3>Possible variant:</h3>
<code>{`<div>
  <div>hello</div><span>World</span>
</div>
`}</code>
        </li>
        <li>
          <code>{`<div>hello <span/> World <div/></div>`}</code>
          <p>Question.4 - Correct</p>
        </li>
      </ul>
      <h2>Exercise.2</h2>
      <ul>
        <li>
          <p>Question.1</p>
          <code>React.createElement("div", null, "Hello World");</code>
        </li>
        <li>
          <p>Question.2</p>
<code>{`React.createElement(
  "div",
  {
    className: "SplitPane"
  },
  React.createElement(
    "div",
    {
      className: "SplitPane-left"
    },
    "Left"
  ),
  React.createElement(
    "div",
    {
      className: "SplitPane-right"
    },
    "Right"
  )
);`}</code>
        </li>
      </ul>

      <UserPanel user={user} />
    </div>
  );
}

export default App;
