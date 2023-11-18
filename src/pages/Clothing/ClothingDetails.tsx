import Red_Top from "../../images/28img/Red/Red_Top.jpg";
import Red_Bottom from "../../images/28img/Red/Red_Bottom.jpg";
import Red_Accesary from "../../images/28img/Red/Red_Accesary.jpg";
import Red_Shoes from "../../images/28img/Red/Red_Shoes.jpg";

import Orange_Top from "../../images/28img/Orange/Orange_Top.jpg";
import Orange_Bottom from "../../images/28img/Orange/Orange_Bottom.jpg";
import Orange_Accesary from "../../images/28img/Orange/Orange_Accesary.jpg";
import Orange_Shoes from "../../images/28img/Orange/Orange_Shoes.jpg";

import Yellow_Top from "../../images/28img/Yellow/Yellow_Top.jpg";
import Yellow_Bottom from "../../images/28img/Yellow/Yellow_Bottom.jpg";
import Yellow_Accesary from "../../images/28img/Yellow/Yellow_Accesary.jpg";
import Yellow_Shoes from "../../images/28img/Yellow/Yellow_Shoes.jpg";

import Green_Top from "../../images/28img/Green/Green_Top.jpg";
import Green_Bottom from "../../images/28img/Green/Green_Bottom.jpg";
import Green_Shoes from "../../images/28img/Green/Green_Shoes.jpg";

import Blue_Top from "../../images/28img/Blue/Blue_Top.jpg";
import Blue_Bottom from "../../images/28img/Blue/Blue_Bottom.jpg";
import Blue_Accesary from "../../images/28img/Blue/Blue_Accesary.jpg";
import Blue_Shoes from "../../images/28img/Blue/Blue_Shoes.jpg";

import Navy_Top from "../../images/28img/Navy/Navy_Top.jpg";
import Navy_Bottom from "../../images/28img/Navy/Navy_Bottom.jpg";
import Navy_Shoes from "../../images/28img/Navy/Navy_Shoes.jpg";

import Purple_Top from "../../images/28img/Purple/Purple_Top.jpg";
import Purple_Bottom from "../../images/28img/Purple/Purple_Bottom.jpg";
import Purple_Shoes from "../../images/28img/Purple/Purple_Shoes.jpg";

import Red_Top2 from "../../images/24to27img/Red/Red_Top.jpg";
import Red_Bottom2 from "../../images/24to27img/Red/Red_Bottom.jpg";


import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import ClothingData from "./ClothingData.json";

interface ClothingDetailsProps {
    currentTemp: number;
    currentClothing: string[];
}

const ClothingDetails: React.FC <ClothingDetailsProps> = ({ currentTemp, currentClothing }) => {
    const { id } = useParams<{ id: string }>();
    
    const [selectedClothingData, setSelectedClothingData] = useState<{name:string, price:string, material:string, details:string, color:string, temp:string}[]>([]);
    const [selectedImages, setSelectedImages] = useState<{name:string, color:string, temp:string}[]>([]);

    if (!id) {
        return <div>잘못된 접근입니다.</div>;
    }

    const clothingId = parseInt(id) + 1;
    const clothingSetName = `${clothingId}번 세트`;
    
    const ClothingImage = [
        {"name": Red_Top, "color":"red", "temp":"28", "type":"top"},
        {"name": Red_Bottom, "color":"red", "temp":"28", "type":"bottom"},
        {"name": Red_Accesary, "color":"red", "temp":"28","type":"accesary"},
        {"name": Red_Shoes, "color":"red", "temp":"28","type":"shoes"},
        {"name": Orange_Top, "color":"orange", "temp":"28","type":"top"},
        {"name": Orange_Bottom, "color":"orange", "temp":"28","type":"bottom"},
        {"name": Orange_Accesary, "color":"orange", "temp":"28","type":"accesary"},
        {"name": Orange_Shoes, "color":"orange", "temp":"28","type":"shoes"},
        {"name": Yellow_Top, "color":"yellow", "temp":"28","type":"top"},
        {"name": Yellow_Bottom, "color":"yellow", "temp":"28","type":"bottom"},
        {"name": Yellow_Accesary, "color":"yellow", "temp":"28","type":"accesary"},
        {"name": Yellow_Shoes, "color":"yellow", "temp":"28","type":"shoes"},
        {"name": Green_Top, "color":"green", "temp":"28","type":"top"},
        {"name": Green_Bottom, "color":"green", "temp":"28","type":"bottom"},
        {"name": Green_Shoes, "color":"green", "temp":"28","type":"shoes"},
        {"name": Blue_Top, "color":"blue", "temp":"28","type":"top"},
        {"name": Blue_Bottom, "color":"blue", "temp":"28","type":"bottom"},
        {"name": Blue_Accesary, "color":"blue", "temp":"28","type":"accesary"},
        {"name": Blue_Shoes, "color":"blue", "temp":"28","type":"shoes"},
        {"name": Navy_Top, "color":"navy", "temp":"28","type":"top"},
        {"name": Navy_Bottom, "color":"navy", "temp":"28","type":"bottom"},
        {"name": Navy_Shoes, "color":"navy", "temp":"28","type":"shoes"},
        {"name": Purple_Top, "color":"purple", "temp":"28","type":"top"},
        {"name": Purple_Bottom, "color":"purple", "temp":"28","type":"bottom"},
        {"name": Purple_Shoes, "color":"purple", "temp":"28","type":"shoes"}
    ];

    useEffect(() => {
        let dataArray;
        let imageArray;
    
        if (currentTemp >= 28){            
            dataArray = ClothingData.clothingdata.filter(data => data.temp == "28" && ["red", "orange", "yellow", "green", "blue", "navy", "purple"].includes(data.color));
            imageArray = ClothingImage.filter(data => data.temp == "28" && ["red", "orange", "yellow", "green", "blue", "navy", "purple"].includes(data.color));
        }
        // else if (currentTemp >=24 && currentTemp <= 27){

        // }
        // else if (currentTemp >=20 && currentTemp <= 23){
            
        // }
        // else if (currentTemp >=17 && currentTemp <= 19){
            
        // }
        // else if (currentTemp >=11 && currentTemp <= 16){
            
        // }
        // else if (currentTemp >=6 && currentTemp <= 10){
            
        // }
        else {
            dataArray = ClothingData.clothingdata.filter(data => data.temp == "28" && ["red", "orange", "yellow", "green", "blue", "navy", "purple"].includes(data.color));
            imageArray = ClothingImage.filter(data => data.temp == "28" && ["red", "orange", "yellow", "green", "blue", "navy", "purple"].includes(data.color));
        }
        setSelectedClothingData(dataArray);
        setSelectedImages(imageArray);
    
    },[currentTemp]);
    
    return (
        <div>
            <h2>{clothingSetName}</h2>
            <img src={currentClothing[parseInt(id)]} alt={`img ${id}`} style={{width: "200px", height: "200px"}} />
            {selectedClothingData && selectedImages && selectedClothingData
                    .filter(data => data.color === ["red", "orange", "yellow", "green", "blue", "navy", "purple"][clothingId-1])
                    .map((item:any, index: number) => (
                        <div key = {index} style={{ display: 'flex' }}>
                            <div>
                                <img src={selectedImages.filter(img => img.color === ["red", "orange", "yellow", "green", "blue", "navy", "purple"][clothingId-1])[index].name} alt={`img ${index}`} style={{width: "150px", height: "150px"}} />
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