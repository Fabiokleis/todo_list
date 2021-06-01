import React from 'react';
import check from '../icons/check-circle.svg';
import notCheck from '../icons/circle.svg';
import deleted from '../icons/trash-2.svg';
import Card from './card.js';

function Done(props){
        if (props.done){
            return <img src={check} alt="done" />
        }else{
            return <img src={notCheck} alt="undone" />
        }
}
function List(props){
   

    return (
        <ul>
            {props._items.map(item => { 
                return( 
                    <li className={item.done?"done":""} key={item.id}>
                        <Card className={item.done?"done item": "item"} >
                            {item.text}
                            <div>
                                <button onClick={() => { props.onDone(item)} }>
                                    <Done done={item.done}></Done>
                                </button>

                                <button onClick={() => { props.OnItemDeleted(item)} }>
                                    <img src={deleted} alt="x" />
                                </button>
                            </div>
                        </Card> 
                    </li>
                );
               }
            )
            }
       </ul>
       );
}

export default List;
