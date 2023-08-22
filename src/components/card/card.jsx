import React from "react";
import {Item, Controller} from './item';
import '../style.css'
import {data} from './mock'

class Card extends React.Component{
    render(){
        return(
            <div className="card-wrapper">
                {data.map(val => <Item data = {val}/>)}
                <Controller/>
            </div>
        )
    }
}

export default Card;