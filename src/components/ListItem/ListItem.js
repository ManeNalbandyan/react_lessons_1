import React, { Component } from 'react';

import './ListItem.css';

class ListItem extends Component {

  state = {
    isDone: false,
    important: false
  };

  onlabelClick = () => {
    this.setState(({ isDone }) => {
      return {
        isDone: !isDone
      }
    });
  };

  onImportant = () => {
    this.setState(({ important }) => {
      return {
        important: !important
      }
    });
  };

  render() {
    const { label, onDeleteItem } = this.props;
    const { isDone, important } = this.state;

    let listClassName = 'pull-left todo-list-title';

    listClassName += important ? ' important': '';
    listClassName += isDone ? ' done': '';

    return (
          <li className="lists">
          <span
          className={ listClassName }
          onClick={ this.onlabelClick }
        >
          { label.title }
        </span>  
        <span  className="titles"> 
            <button className ="btn btn-danger" onClick={ this.onImportant }>  <i class="fa fa-check" /></button>
            <button  className ="btn btn-danger" onClick = { () => onDeleteItem (label.id)}><i class="fa fa-remove"></i></button>
            </span>
         </li>
    );
}
};

export default ListItem