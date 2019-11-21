// Exercise.1
// - Is this valid JSX examples? Fix it if needed

// Question.1
// <div/>
// Answer: yes

// Question.2
// <div>hello</div>
// Answer: yes

// Question.3
// <div>hello</div><span>World</span>
// Answer: yes

// Question.4
// <div>hello<span/> World<div/>
// Answer: no




// Exercise.2
//  - What code will return Babel from this JSX

// Question.1 
// <div>Hello World</div>
// Answer: 
// React.createElement('span', null, 'Hello World')

// Question.2 
// <div className="SplitPane">
    // <div className="SplitPane-left">
    //   Left
    // </div>
    // <div className="SplitPane-right">
    //   Right
    // </div>
// </div>
// Answer: 
// React.createElement('div',  {className: 'SplitPane'},
//     React.createElement('div',  {className: 'SplitPane-left'}, 'Left'),
//     React.createElement('div',  {className: 'SplitPane-right'}, 'Right')
// )

