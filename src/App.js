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
          <div/>
          <p>Question.1 - Correct</p>
        </li>
        <li>
          <div>hello</div>
          <p>Question.2 - Correct</p>
        </li>
        <li>
          <div>hello</div><span>World</span>
          <p>Question.3 - Correct</p>
        </li>
        <li>
          <p>Question.4 - Incorrect</p>
          <h3>Possible variants:</h3>
          <ol>
            <li>
              <div>hello<span></span> World</div>
            </li>
            <li>
              <div>hello
                <span/>
                World
                <div/>
              </div>
            </li>
          </ol>
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
          <code>React.createElement({'\n'}
            &nbsp;&nbsp;"div",{'\n'}
            &nbsp;&nbsp;&#123;{'\n'}
            &nbsp;&nbsp;&nbsp;&nbsp;className: "SplitPane"{'\n'}
            &nbsp;&nbsp;&#125;,{'\n'}
            &nbsp;&nbsp;React.createElement({'\n'}
            &nbsp;&nbsp;&nbsp;&nbsp;"div",{'\n'}
            &nbsp;&nbsp;&nbsp;&nbsp;&#123;{'\n'}
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;className: "SplitPane-left"{'\n'}
            &nbsp;&nbsp;&nbsp;&nbsp;&#125;,{'\n'}
            &nbsp;&nbsp;&nbsp;&nbsp;"Left"{'\n'}
            &nbsp;&nbsp;),{'\n'}
            &nbsp;&nbsp;React.createElement({'\n'}
            &nbsp;&nbsp;&nbsp;&nbsp;"div",{'\n'}
            &nbsp;&nbsp;&nbsp;&nbsp;&#123;{'\n'}
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;className: "SplitPane-right"{'\n'}
            &nbsp;&nbsp;&nbsp;&nbsp;&#125;,{'\n'}
            &nbsp;&nbsp;&nbsp;&nbsp;"Right"{'\n'}
            &nbsp;&nbsp;){'\n'}
          );</code>
        </li>
      </ul>

      <UserPanel user={user} />
    </div>
  );
}

export default App;
