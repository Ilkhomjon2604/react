import React from "react";
import map from '../url/Banner.png'
import './style.css'
class Map extends React.Component{
    render(){
        return (
            <img className="banner" src={map} alt="World map" />
        )
    }
}
export default Map