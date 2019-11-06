import React, {Component} from 'react';
import './Todoitem.css';
var classNames = require('classnames');

class TodoItem extends Component{
  render(){
    const { item } = this.props;
    return (  
      <div className={classNames('TodoItem', {
        'TodoItem-complete': item.isComplete
      })}>
        <p>{this.props.item.title}</p>
      </div>
    )
  }
}
export default TodoItem