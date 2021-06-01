import React from 'react';
import ListItem from './listItem.js';

function List(props){
   

    return (
        <ul>
            {props._items.map(item => <ListItem OnItemDeleted={props.OnItemDeleted} onDone={props.onDone} item={item} key={item.id}></ListItem>)}
       </ul>);
  
}

export default List;
