import React, {useEffect, useState} from "react";
import {useNavigate, useParams, useSearchParams} from "react-router-dom";
import clothingData from "./clothingData.json"

interface TypeDetailsProps {
    currentTemp: number;
}

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

const TypeDetails: React.FC<TypeDetailsProps> = ({currentTemp}) => {
    const {id} = useParams<{ id: string }>();
    const [selectedClothingData, setSelectedClothingData] = useState<dataType[]>([]);
    
    const setData = () => {
        if (currentTemp >= 28) {
            setSelectedClothingData(clothingData.clothes.filter(data => data.temp === 28))
        } else if (currentTemp >= 24 && currentTemp <= 27) {

        } else if (currentTemp >= 20 && currentTemp <= 23) {

        } else if (currentTemp >= 17 && currentTemp <= 19) {

        } else if (currentTemp >= 11 && currentTemp <= 16) {

        } else if (currentTemp >= 6 && currentTemp <= 10) {

        } else {
            setSelectedClothingData(clothingData.clothes.filter(data => data.temp === 0))
        }
    };

    useEffect(() => {
        setData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentTemp, id]);

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