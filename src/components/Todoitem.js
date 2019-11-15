import React, {Component} from 'react';
import './Todoitem.css';
import classNames from 'classnames';
import checkImg from '../image/check.svg'
import checkCompleteImg from '../image/check-complete.svg'
import remove from '../image/remove.svg'
class TodoItem extends Component{
  render(){
    const { item, checkButton, deleteButton } = this.props;
    let url = checkImg;
    if(item.isComplete)
      url = checkCompleteImg;
    return (  
        <div className={classNames('TodoItem', {
          'TodoItem-complete': item.isComplete
        })}>
          <img alt="" src={url} width={24} height={24} onClick={checkButton}/>
          <p>{this.props.item.title}</p>
          <img alt="" src={remove} width={15} height={15} className="delete" onClick={deleteButton}></img>
        </div>
    )
  }
}
export default TodoItem