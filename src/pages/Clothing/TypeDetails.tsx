import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import clothingData from "./clothingData.json"
import SetCurrentClothing from "./setClothingData";
import {RootState} from "../../redux/store";

interface ClothingItem {
    name: string;
    price: string;
    material: string;
    details: string;
    color: string;
    temp: number;
    img: string;
    type: string;
}

const TypeDetails = () => {
    const {id} = useParams<{ id: string }>();
    const selectedClothingData = useSelector((state: RootState) => state.clothes.value as ClothingItem[]);
    const clothingId = id ? parseInt(id) : 0;
    const clothingSetName = `${clothingId + 1}번 세트`;
    SetCurrentClothing();


    // useEffect(() => {
    //     setData();
    //     // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, [currentTemp, id]);

    return (
        <div>
            {selectedClothingData && selectedClothingData
                .filter(data => data.type === id)   
                .map((item: any, index: number) => ( 
                    <div key={index} style={{display: 'flex'}}>
                        <div>
                            <img
                                src={require(
                                    `${item.img}`
                                )}
                                alt={`img ${index}`} style={{width: "150px", height: "150px"}}/>
                            <p>{item.name} {item.price}</p>
                        </div>
                    </div>
                ))}
        </div>
    );
};

export default TypeDetails;