import React from 'react';
import './Filter.css';

const Filter = () =>{
    return (
       <div>     
           
           <input type="text" className="search" />
           <button class=" btn btn-danger"><i class=" fa fa-search" /></button>
       </div>
    );
};

export default Filter