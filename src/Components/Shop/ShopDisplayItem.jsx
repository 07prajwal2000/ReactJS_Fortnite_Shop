import React, {useState} from 'react'
import {Link} from 'react-router-dom';
import './Styles/ShopComponent.css'

const ShopDisplayItem = ({id,name, imgSrc, description, buttonEvent}) => {
    var [imgClassName, SetImgClassName] = useState("card-null-img");
    var [enablePopup, SetEnablePopup] = useState(false);
    
    function OnButtonClick(id){
        console.log(id);
        SetEnablePopup(true);
    }

    return (
        <div className="card">
            <h3 className="card-header">{name}</h3>
            <img className={imgClassName} onLoad={()=> SetImgClassName("card-img")} src={imgSrc} alt="" />
            <p>{description}</p>
            <Link className="card-button" to={`/shopfulldetails/${id}`} >Show Full Details</Link>
        </div>
    )
}


export default ShopDisplayItem
