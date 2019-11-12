import React from 'react';
import './App.css';
import TodoItem from './components/Todoitem'
import checkAll from './image/check-all.svg'
class App extends React.Component {
  constructor(){
    super();
    this.state = {
      newItem: "",
      currentFilter: "All",
      todoItems: [
        { title: 'Mua bim bim', isComplete: true }, 
        { title: 'đi chợ', isComplete: true }, 
        { title: 'đi đá bóng', isComplete: false }
      ]
    }
    this.onKeyUp = this.onKeyUp.bind(this);
    this.onChange = this.onChange.bind(this);
    this.All = this.All.bind(this);
    this.Active = this.Active.bind(this);
    this.Completed = this.Completed.bind(this);
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
  All(){
    this.setState({
      currentFilter: "All"
    })
  }
  Active(){
    this.setState({
      currentFilter: "Active"
    })
  }
  Completed(){
    this.setState({
      currentFilter: "Completed"
    })
  }
  render() {
    const { todoItems, newItem, currentFilter } = this.state;
    let todoItemsFilter;
    if(currentFilter === "All") todoItemsFilter = todoItems;
    if(currentFilter === "Active")  todoItemsFilter = todoItems.filter(x => x.isComplete === false);
    if(currentFilter === "Completed") todoItemsFilter = todoItems.filter(x => x.isComplete === true);
    return (
      <div className="container">
        <h1>todos</h1>
        <div className="todos">
          <header className="header">
          
            <div className="input">
              <img alt="" src={checkAll} width={20} height={20}/>
              <input 
                type="text" 
                placeholder="Add a new item"
                value = {newItem}
                onChange = {this.onChange} 
                onKeyUp={this.onKeyUp}/>
              </div>
            
          </header>
          {
            todoItemsFilter.length > 0 && todoItemsFilter.map((item, index) => 
              <TodoItem 
                key={index} 
                item={item} 
                onClick={this.onItemClicked(item)}/>
              )
          }
          {/* {
            todoItemsFilter.length === 0 && 'Nothing here'
          } */}
          <div className="foo">
            <ul className="filter">
              <li className="button"><a href="/" onClick={this.All}>All</a></li>
              <li className="button"><a href="/" onClick={this.Active}>Active</a></li>
              <li className="button"><a href="/" onClick={this.Completed}>Completed</a></li>
            </ul>   
          </div>
        </div>
      </div>
    );
      }
    
}

export default App;
