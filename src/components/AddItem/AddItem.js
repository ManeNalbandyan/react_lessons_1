import React, {Component} from 'react';
import './AddItem.css';

export default class AddItem extends Component{

    onInputChange = ({ target }) =>{
        this.setState({
          text: target.value
        });
      }

      render(){
        const { onAddItem } = this.props;
    
    return (
       <div>
           <input type="text"  className="textarea"  onChange ={ this.onInputChange }/>
           <button className ="btn btn-danger"  onClick={ () => onAddItem(this.state.text) }><h5>+</h5></button>
       </div>
    );
};
}