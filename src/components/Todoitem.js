import React, {Component} from 'react';
import './Todoitem.css';
import classNames from 'classnames';

class TodoItem extends Component{

  render(){
    const { item, onClick } = this.props;
    return (  
      <div onClick={onClick} className={classNames('TodoItem', {
        'TodoItem-complete': item.isComplete
      })}>
        <p>{this.props.item.title}</p>
      </div>
    )
  }
}
export default TodoItem