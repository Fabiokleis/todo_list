import React, {useState} from 'react';
import {addItem} from '../actions/listAction.js';
import {useDispatch} from 'react-redux';

function Form(props){
    const dispatch = useDispatch();

    const [_text, setText] = useState("");

    function handleChange(event){
        let text = event.target.value;
        setText(text);
    }
    
    function addText(event){
        event.preventDefault();
        if(_text){
            dispatch(addItem(_text));
            setText("");
            props.OnHideModal();
        }
    }
    
    return (
        <form>
            <input onChange={handleChange} type="text" value={_text}></input>
            <button onClick={addText}>add</button>
        </form>
    );

}

export default Form;
