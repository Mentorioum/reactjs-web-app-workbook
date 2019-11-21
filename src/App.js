import React from 'react';
import logo from './logo.svg';
import SplitPane from './components/splitPane';
import UserPanel from './components/userPanel';
import './App.css';

const user = { 
  firstName: 'Foo',
  lastName: 'Boo',
  avatarUrl: logo,
  date: new Date()
}

function App() {
  return (
    <div className="App">
      <SplitPane />
      <UserPanel
        name= {user.firstName}
        src={user.avatarUrl}
        lastName={user.lastName}
        date={user.date}
      />
    </div>
  );
}

export default App;