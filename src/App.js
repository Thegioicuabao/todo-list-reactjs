import React from 'react';
import './App.css';
import TodoItem from './components/Todoitem'

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      todoItems: [
        { title: 'Mua bim bim', isComplete: true }, 
        { title: 'đi chợ', isComplete: true }, 
        { title: 'đi đá bóng', isComplete: false }
      ]
    }
  }
  
  onItemClicked(item) {
    return (event) => {
      const isComplete = item.isComplete;
      const { todoItems } = this.state;
      const index = todoItems.indexOf(item);
      this.setState({
        todoItems: [
          ...todoItems.slice(0, index),
          {
            ...item,  
            isComplete: !isComplete
          },
          ...todoItems.slice(index + 1)
        ]
      }) 
    }
   
  }
  render() {
    const { todoItems } = this.state;
    if(todoItems.length)
    return (
      <div className="App">
        <header className="App-header">
          <h1>todos</h1>
        </header>
        {
          todoItems.length && todoItems.map((item, index) => 
            <TodoItem 
              key={index} 
              item={item} 
              onClick={this.onItemClicked(item)}/>
            )
        }
        {
          todoItems.length === 0 && 'Nothing here.'
        }
      </div>
    );
  }
}

export default App;
