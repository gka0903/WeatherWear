import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import clothingData from "./clothingData.json"
import {useDispatch, useSelector} from "react-redux";
import {setClothes} from "../../redux/slices/clothesSlice";
import {RootState} from "../../redux/store";


interface dataType {
    name: string,
    price: string,
    material: string,
    details: string,
    color: string,
    temp: number,
    type: string,
    img: string
}

const ClothingDetails = () => {
    const {id} = useParams<{ id: string }>();
    const currentTemp = useSelector((state: RootState) => state.temperature.value)
    const clothingId = id ? parseInt(id) : 0;
    const clothingSetName = `${clothingId + 1}번 세트`;
    const dispatch = useDispatch();


    const [selectedClothingData, setSelectedClothingData] = useState<dataType[]>([]);
    const setData = () => {
        if (currentTemp >= 28) {
            setSelectedClothingData(clothingData.clothes.filter(data => data.temp === 28 && ["red", "orange", "yellow", "green", "blue", "navy", "purple"].includes(data.color)))
        } else if (currentTemp >= 24 && currentTemp <= 27) {

        } else if (currentTemp >= 20 && currentTemp <= 23) {

        } else if (currentTemp >= 17 && currentTemp <= 19) {

        } else if (currentTemp >= 11 && currentTemp <= 16) {

        } else if (currentTemp >= 6 && currentTemp <= 10) {

        } else {
            setSelectedClothingData(clothingData.clothes.filter(data => data.temp === 0 && ["red", "orange", "yellow", "green", "blue", "navy", "purple"].includes(data.color)))
        }
        dispatch(setClothes(selectedClothingData));
    };

    useEffect(() => {
        setData();
        console.log("data", selectedClothingData);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentTemp, id]);

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