import React, {Component} from 'react';
import './Todoitem.css';
import classNames from 'classnames';
import checkImg from '../image/check.svg'
import checkCompleteImg from '../image/check-complete.svg'
class TodoItem extends Component{
  render(){
    const { item, onClick } = this.props;
    let url = checkImg;
    if(item.isComplete)
      url = checkCompleteImg;
    return (  
      <div className={classNames('TodoItem', {
        'TodoItem-complete': item.isComplete
      })}>
        <img alt="" src={url} width={24} height={24} onClick={onClick}/>
        <p>{this.props.item.title}</p>
      </div>
    )
  }
}
export default TodoItem