import React, { useEffect, useState, useRef } from 'react'
import './Styles/ShopFullDetails.css'
import Tippy from '@tippyjs/react'
import 'tippy.js/dist/tippy.css'
import 'tippy.js/themes/light.css';
import 'tippy.js/animations/scale.css';

const ShopFullDetails = ({match}) => {
 
    const itemId = match.params.itemId;
    console.log(match.params.itemId);
    const [loadingText, SetLoadingText] = useState("Loading");

    const [itemWithId, SetItem] = useState({
        item : {
            images : {}
        },

    });

    const [isItemFound, SetItemFound] = useState(false);
    useEffect( async ()=> {
        const data = await (await fetch(`https://fortnite-api.theapinetwork.com/item/get?id=${itemId}`)).json();

        if (data.data.itemId == undefined) {
            SetItemFound(false);

            var timeleft = 15;
            var downloadTimer = setInterval(function(){
            
                if(timeleft <= 0){
                SetLoadingText("No Data found.");
                clearInterval(downloadTimer);
            }
            
            timeleft -= 1;
            }, 500);

        }
        else{
            SetItemFound(true);
            SetItem(data.data);
        }
    }, [] );

    return (
        <div className="">
            {
                isItemFound ? 
                <div>
                        <div className="container">
                            <div className="item item-header">{itemWithId.item.name}</div>
                            <Tippy content={<span>{itemWithId.item.name}</span>} duration={200} placement='bottom' interactive={true} theme={'material'} animation='scale' >
                                <img className="item item-image" src={itemWithId.item.images.icon} alt="image"/>
                            </Tippy>
                            <div className="item item-main-info">
                                <div className="item-content">
                                    <b>Content</b> 
                                    <p className="">{itemWithId.item.description}</p>
                                    <p className="">Cost : <b>{itemWithId.item.obtained}</b> <br /> Obtained via : <b>{itemWithId.item.obtained_type}</b> </p>
                                </div>
                            </div>
                            <div className="item item-main-remaining">
                                <div className="item-content">
                                    <div className="bordered-container">
                                        <h5>Ratings</h5>
                                        <div className="flex-container">
                                            <p className="flex-item">Avg Stars : <b> {itemWithId.item.ratings?.avgStars} </b> </p>
                                            <p className="flex-item">Total Points : <b> {itemWithId.item.ratings?.totalPoints} </b> </p>
                                            <p className="flex-item">No of Votes : <b> {itemWithId.item.ratings?.numberVotes} </b></p>

                                            {itemWithId.itemOccurrences ? 
                                                <div className="bordered-container">
                                                <div className="flex-container">
                                                    <p className="flex-item">First Occurrences : <b> {itemWithId.itemOccurrences.firstOccurrences} </b> </p> 
                                                    <p className="flex-item">Total Occurances : <b> {itemWithId.itemOccurrences.occurrences} </b> </p>
                                                </div>
                                            </div>
                                            
                                            :""}

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                </div> : 
                <div>
                    <h1>{loadingText}</h1>
                </div>
            }
        </div>
    )
}

export default ShopFullDetails

const TippyButton = () => (
    <Tippy content={<span>Tooltippp</span>} duration={200} placement='bottom' interactive={true} theme={'material'} animation='scale' >
      <button>My button</button>
    </Tippy>
  );
