import React, {useState, useEffect} from 'react'
import ShopDisplayItem from '../Components/Shop/ShopDisplayItem'
import './Styles/ShopPage.css'

const Shop = () => {

    useEffect( ()=>{
        FetchData();
    }, [] );

    const [data, SetData] = useState([]);

    const FetchData = async () => {
        const data = await (await fetch('https://fortnite-api.theapinetwork.com/store/get')).json();
        // console.log(data.data);
        SetData(data.data);
    }

    return (
        <div>
            <h1><b><u>Fortnite Daily Shop</u></b></h1>
            
            <div className={data.length != 0 ? "shop-items" : "shop-null-items" }>
            {/* <ShopDisplayItem key="" name="Name" imgSrc="" description="Description" id="ID" /> */}
                {
                    data.map(ele => 
                        (
                            <ShopDisplayItem key={ele.itemId} name={ele.item.name} imgSrc={ele.item.images.icon} 
                                description={ele.item.description} id={ele.itemId} 
                                buttonEvent={ ()=>{
                                    
                                } } />
                        )
                    )
                }
            </div>
        </div>
    )
}


export default Shop
