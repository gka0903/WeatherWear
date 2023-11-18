import React, {useState} from "react";
import {useParams} from "react-router-dom";

// import clothingData from "./clothingData.json"

interface ClothingDetailsProps {
    currentTemp: number;
    currentClothing: string[];
}

const ClothingDetails: React.FC<ClothingDetailsProps> = ({currentTemp, currentClothing}) => {
    const {id} = useParams<{ id: string }>();

    const [selectedClothingData, setSelectedClothingData] = useState<{ name: string, price: string, material: string, details: string, color: string, temp: string }[]>([]);
    const [selectedImages, setSelectedImages] = useState<{ name: string, color: string, temp: string }[]>([]);

    if (!id) {
        return <div>잘못된 접근입니다.</div>;
    }

    const clothingId = parseInt(id) + 1;
    const clothingSetName = `${clothingId}번 세트`;

    // useEffect(() => {
    //     let dataArray;
    //     let imageArray;
    //
    //     if (currentTemp >= 28) {
    //         dataArray = clothingData.clothingdata.filter(data => data.temp == "28" && ["red", "orange", "yellow", "green", "blue", "navy", "purple"].includes(data.color));
    //         imageArray = clothingData.filter(data => data.temp == "28" && ["red", "orange", "yellow", "green", "blue", "navy", "purple"].includes(data.color));
    //     }
    //         // else if (currentTemp >=24 && currentTemp <= 27){
    //
    //         // }
    //         // else if (currentTemp >=20 && currentTemp <= 23){
    //
    //         // }
    //         // else if (currentTemp >=17 && currentTemp <= 19){
    //
    //         // }
    //         // else if (currentTemp >=11 && currentTemp <= 16){
    //
    //         // }
    //         // else if (currentTemp >=6 && currentTemp <= 10){
    //
    //     // }
    //     else {
    //         dataArray = clothingData.clothingdata.filter(data => data.temp == "28" && ["red", "orange", "yellow", "green", "blue", "navy", "purple"].includes(data.color));
    //         imageArray = clothingData.filter(data => data.temp == "28" && ["red", "orange", "yellow", "green", "blue", "navy", "purple"].includes(data.color));
    //     }
    //     setSelectedClothingData(dataArray);
    //     setSelectedImages(imageArray);
    //
    // }, [currentTemp]);

    return (
        <div>
            <h2>{clothingSetName}</h2>
            <img src={currentClothing[parseInt(id)]} alt={`img ${id}`} style={{width: "200px", height: "200px"}}/>
            {selectedClothingData && selectedImages && selectedClothingData
                .filter(data => data.color === ["red", "orange", "yellow", "green", "blue", "navy", "purple"][clothingId - 1])
                .map((item: any, index: number) => (
                    <div key={index} style={{display: 'flex'}}>
                        <div>
                            <img
                                src={selectedImages.filter(img => img.color === ["red", "orange", "yellow", "green", "blue", "navy", "purple"][clothingId - 1])[index].name}
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