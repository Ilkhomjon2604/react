import React from "react";
import time from './img/time.svg'
import people from './img/people.svg'
import location from './img/Vector.svg'
import star from './img/star.svg'

class Item extends React.Component{
    render(){
        const  {data} = this.props;
        return (
            <div className="item-wrapper">
                <img className="item-img" src={data.url} alt="Item Image" />
                <div className="item-info">
                <h2 className="item-title">{data.title}</h2>
                <div className="icons-wrapper">
                    <span className="item-spacific-data"> <img className="small-icon" src={time} alt="Time icon" /> {data.duration} </span>
                    <span className="item-spacific-data"> <img className="small-icon" src={people} alt="people icon" /> {data.occupy} </span>
                    <span className="item-spacific-data"> <img className="small-icon" src={star} alt="Time icon" /> {data.rate} </span>
                    <span className="item-spacific-data"> <img className="small-icon" src={location} alt="Location icon" /> {data.location} </span>
                    <span className="item-price"> {data.price} </span>

                </div>

                </div>
            </div>
        )
    }
}

class Controller extends React.Component{
    render(){
        return(

            <div className="controller-wrapper">
                <div className="control-path prev">Prev</div>
                <div className="control-path ">01</div>
                <div className="control-path ">02</div>
                <div className="control-path ">03</div>
                <div className="control-path ">04</div>
                <div className="control-path next">Next</div>

            </div>
        )
    }
}
export {Item, Controller}