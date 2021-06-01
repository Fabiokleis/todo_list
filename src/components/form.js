import React, {useState} from 'react';

function Form(props){

    const [_text, setText] = useState("");

    function handleChange(event){
        let text = event.target.value;
        setText(text);
    }
    
    function addItem(event){
        event.preventDefault();
        if(_text){
            props.onAddItem(_text);
            setText("");
        }
    }
    
    return (
        <form>
            <input onChange={handleChange} type="text" value={_text}></input>
            <button onClick={addItem}>add</button>
        </form>
    );

}

export default Form;
