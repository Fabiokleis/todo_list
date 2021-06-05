import React from 'react';
import ListItem from './listItem.js';
import {useSelector} from 'react-redux';

function List(props){
    const items = useSelector((state) => {return state});

    return (
        <ul>
            {items.map(item => <ListItem item={item} key={item.id}></ListItem>)}
       </ul>);
  
}

export default List;
