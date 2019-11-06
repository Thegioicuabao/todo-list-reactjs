import React from 'react';
import './App.css';
import TodoItem from './components/Todoitem'

class App extends React.Component {
  constructor(){
    super();
    this.TodoItem = [
      { title: 'Mua bim bim', isComplete: true }, 
      { title: 'đi chợ', isComplete: true }, 
      { title: 'đi đá bóng', isComplete: false }
    ];
  }

  render() {
    return (
      <div className="App">
        {
          this.TodoItem.length > 0 && this.TodoItem.map((item, index) => <TodoItem key={index} item={item}/>)
        }
        {
          this.TodoItem.length === 0 && 'Nothing here.'
        }
      </div>
    );
  }
}

export default App;
