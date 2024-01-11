import React from "react";
import {CDN_URL} from "../utils/constants";

const RestaurantCard = (props) =>{
    const {resData} = props;
    const {
        cloudinaryImageId,
        name,
        avgRating,
        cuisines,
        costForTwo,
        sla
    } = resData?.info;

    return(
        <div className='m-4 p-4 w-[300px] rounded-lg bg-[#f0f0f0] hover:shadow-xl hover:bg-gray-200'>
            <img className='rounded-lg' src={CDN_URL + cloudinaryImageId} alt="res-logo"/>
            <h3 className="font-bold py-1 text-lg">{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating} stars</h4>
            <h4>{costForTwo}</h4>
            <h4>{sla.deliveryTime} minutes</h4>
        </div>
    )
}

export const withOfferLabel = (RestaurantCard) =>{
    return (props) => {
        const {resData} = props;
        return(
            <div>
                <label>Open Now</label>
                <RestaurantCard { ...props }/>
            </div>
        )
    }
}

export default RestaurantCard;