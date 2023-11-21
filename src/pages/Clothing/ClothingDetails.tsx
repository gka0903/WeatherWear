import React from "react";
import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import {RootState} from "../../redux/store";
import SetCurrentClothing from "./setClothingData";

interface ClothingItem {
    name: string;
    price: string;
    material: string;
    details: string;
    color: string;
    temp: number;
    img: string;
}

const ClothingDetails = () => {
    const {id} = useParams<{ id: string }>();
    const selectedClothingData = useSelector((state: RootState) => state.clothes.value as ClothingItem[]);
    const clothingId = id ? parseInt(id) : 0;
    const clothingSetName = `${clothingId + 1}번 세트`;
    SetCurrentClothing();


    return (
        <div>
            <h2>{clothingSetName}</h2>
            {selectedClothingData && selectedClothingData
                .filter(data => data.color === ["red", "orange", "yellow", "green", "blue", "navy", "purple"][clothingId])
                .map((item: any, index: number) => (
                    <div key={index} style={{display: 'flex'}}>
                        <div>
                            <img
                                src={require(
                                    `${selectedClothingData
                                        .filter(data => data.color === ["red", "orange", "yellow", "green", "blue", "navy", "purple"][clothingId])[index].img}`
                                )}
                                alt={`img ${index}`} style={{width: "150px", height: "150px"}}/>
                            <p>{item.name} {item.price}</p>
                            <p>세부사항: {item.details}</p>
                            <p>소재: {item.material}</p>
                        </div>
                    </div>
                ))}
        </div>
    );

};

export default ClothingDetails;