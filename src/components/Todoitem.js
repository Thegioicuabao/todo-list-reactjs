import React, {Component} from 'react';
import './Todoitem.css';
var classNames = require('classnames');

class TodoItem extends Component{
  render(){
    const { item } = this.props;
    let className = 'TodoItem';
    if(item.isComplete)
    className += ' TodoItem-complete'
    return (  
      <div className={className}>
        <p>{this.props.item.title}</p>
      </div>
    )
  }
}
export default TodoItem