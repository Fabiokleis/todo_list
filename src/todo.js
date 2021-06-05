import React, {useState} from 'react';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import ListReducer from './reducers/listReducer.js';
import Form from './components/form.js';
import List from './components/list.js';
import Modal from './components/modal.js';
import './todo.css';

function saveStateOnLocalStorage(state){
    localStorage.setItem('saved_items', JSON.stringify(state));
}

function getStateSavedOnLocalStorage(){
    const saved_items = JSON.parse(localStorage.getItem(('saved_items')));
    if(saved_items){
        return saved_items;
    }else{
        return [];
    }
}

const store = createStore(ListReducer, getStateSavedOnLocalStorage());
store.subscribe(() => saveStateOnLocalStorage(store.getState()));

function Todo(){
   
    const [show, setShowModal] = useState(true);

    function OnHideModal(){
               
        setShowModal(false);
        
    }

    return (
        <div className="container">
            <Provider store={store}>
                <header className="header">
                    <h1>Todo</h1>
                    <button className="addButton" onClick={() => {setShowModal(true)}}>+</button>
                </header>
                <List ></List>
                <Modal show={show} OnHideModal={OnHideModal}><Form OnHideModal={OnHideModal} /></Modal>
            </Provider>
        </div>

    );
}

export default Todo;
