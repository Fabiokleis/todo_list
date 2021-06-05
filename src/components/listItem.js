import React from 'react';
import check from '../icons/check-circle.svg';
import notCheck from '../icons/circle.svg';
import deleted from '../icons/trash-2.svg';
import Card from './card.js';
import {useDispatch} from 'react-redux';
import {deleteItem, changeDone} from '../actions/listAction.js'

function Done(props){
    if(props.done){
        return <img src={check} alt="done" />
    }else{
        return <img src={notCheck} alt="undone" />
    }
}

function ListItem(props){
    const dispatch = useDispatch();
    return (
        <li className={props.item.done?"done":""}>
            <Card className={props.item.done?"done item":"item"}>
                {props.item.text}
                <div>
                    <button onClick={() => dispatch(changeDone(props.item.id))}> 
                        <Done done={props.item.done}></Done>
                    </button>
                    <button onClick={() => dispatch(deleteItem(props.item.id))}>
                        <img src={deleted} alt="x" />
                    </button>
                </div>
            </Card>
        </li>
   );
}

export default ListItem;
