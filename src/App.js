import React from 'react';
import './App.css';
import TodoItem from './components/Todoitem'

class App extends React.Component {
  constructor(){
    super();
    this.TodoItem = [
    'Mua bim bim', 
    'đi chợ', 
    'đi đá bóng'
    ];
  }

  render() {
    return (
      <div className="App">
        {
          this.TodoItem.map((item, index) => <TodoItem key={index} title={item}/>)
        }
      </div>
    );
  }
}

export default App;
