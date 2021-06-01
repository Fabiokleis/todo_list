import React, {useState} from 'react';
import Item from './components/item.js';
import Form from './components/form.js';
import List from './components/list.js';
import './todo.css';

function Todo(){
    
    const [_items, setItems] = useState([]);

    function onAddItem(text){

        let item = new Item(text);

        setItems([..._items, item]);
    }

    function OnItemDeleted(item){
        let filteredItems = _items.filter(it => it.id !== item.id);
        setItems(filteredItems);
    }

    function onDone(item){
        let updatedItems = _items.map(it => {
            if(it.id === item.id){
                item.done = true;
            }
            return it;
        });
        setItems(updatedItems);
    }

    return (
        <div className="container">
            <h1>Todo</h1>
            <Form onAddItem={onAddItem}></Form>
            <List onDone={onDone} OnItemDeleted={OnItemDeleted} _items={_items}></List>
        </div>
    );
}

export default Todo;
