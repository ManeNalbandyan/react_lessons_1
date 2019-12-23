import React , {Component} from 'react';

import Header from '../Header';
import Filter from '../Filter';
import List from '../List';
import AddItem from '../AddItem';
import './App.css';


export default class App extends Component {

    state = {
        todoData: [
          {
            id: 1,
            title:  'Have breakfast ..'
          },
          {
            id: 2,
            title: 'do the shopping'
          },
          {
            id: 3,
            title: 'make a dinner ....'
          },
          {
            id: 4,
            title: 'buy food for dog'
          },
          {
            id: 5,
            title: 'go to the cinema'
          }
        ]
      };

      onDeleteItem = (id) => {
        this.setState(({todoData}) => {
    
          const idx = todoData.findIndex((obj) => obj.id === id);
    
          const before = todoData.slice(0, idx);
          const after = todoData.slice(idx + 1);
    
          return {
            todoData: [...before, ...after]
          }
    
        });
    
        };
    
        onAddItem = (text) => {
            this.setState(({ todoData }) =>{
      
              let id= 1;
              if (todoData[todoData.length-1]){
      
                id = todoData[todoData.length-1 ].id + 1;
              }
                
      
              const obj = { id, title: text };
      
              return {
                todoData: [...todoData, obj]
              };
            });
          }

render () {
    return (
       <div className="main">
            <h1 className="data">Tuesday, 25 Dec</h1>
            <Filter />
            <div className="row move">
            <List todoList={this.state.todoData}t
            onDeleteItem = {this.onDeleteItem} />
            </div>
            <AddItem onAddItem={this.onAddItem} />
       </div>
    );
};
}