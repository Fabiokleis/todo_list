import React, {useState, useEffect} from 'react';
import Item from './components/item.js';
import Form from './components/form.js';
import List from './components/list.js';
import Modal from './components/modal.js';
import './todo.css';

const SAVED_ITEMS = "savedItems";

function Todo(){
    
    const [_items, setItems] = useState([]);
    const [show, setShowModal] = useState(true);

    useEffect(() => {
        const savedItems = JSON.parse(localStorage.getItem(SAVED_ITEMS));
        if(savedItems){
            setItems(savedItems);
        }

    }, [])

    useEffect(() => {
        localStorage.setItem(SAVED_ITEMS, JSON.stringify(_items));
    }, [_items]);


    function onAddItem(text){

        let item = new Item(text);
        item.id = _items.length;
        setItems([..._items, item]);
        OnHideModal();
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

    function OnHideModal(){
               
        setShowModal(false);
        
    }

    return (
        <div className="container">
            <header className="header">
                <h1>Todo</h1>
                <button className="addButton" onClick={() => {setShowModal(true)}}>+</button>
            </header>
            <List onDone={onDone} OnItemDeleted={OnItemDeleted} _items={_items}></List>
            <Modal show={show} OnHideModal={OnHideModal}><Form onAddItem={onAddItem}></Form></Modal>
        </div>
    );
}

export default Todo;
