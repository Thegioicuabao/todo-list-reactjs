import React from 'react';
import './App.css';
import TodoItem from './components/Todoitem'

function App() {
  return (
    <div className="App">
      <TodoItem title='go to school' />
      <TodoItem title='go to market' />
      <TodoItem title='go to sleep' />
    </div>
  );
}

export default App;
