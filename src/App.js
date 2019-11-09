import React from 'react';
import './App.css';
import TodoItem from './components/Todoitem'
import checkAll from './image/check-all.svg'
class App extends React.Component {
  constructor(){
    super();
    this.state = {
      newItem: "",
      todoItems: [
        { title: 'Mua bim bim', isComplete: true }, 
        { title: 'đi chợ', isComplete: true }, 
        { title: 'đi đá bóng', isComplete: false }
      ]
    }
    this.onKeyUp = this.onKeyUp.bind(this);
    this.onChange = this.onChange.bind(this);
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
  onKeyUp(event) {
    if (event.keyCode === 13) {
      let text =  event.target.value;
      if(!text) {
       return;
      }
      text = text.trim();
      if(!text) {
        return;
       }
      this.setState({
        newItem: "",
        todoItems: [
          { title: text, isComplete: false},
          ...this.state.todoItems
        ]
      })
    }
  }
  onChange(event) {
    this.setState({
      newItem: event.target.value
    })
  }
  render() {
    const { todoItems, newItem } = this.state;
    if(todoItems.length)
    return (
      <div className="todos">
        <header className="header">
          <h1>todos</h1>
          <div className="input">
            <img src={checkAll} width={20} height={20}/>
            <input 
              type="text" 
              placeholder="Add a new item"
              value = {newItem}
              onChange = {this.onChange} 
              onKeyUp={this.onKeyUp}/>
            </div>
          
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
