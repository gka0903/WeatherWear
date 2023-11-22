import React from "react";
import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import {RootState} from "../../redux/store";
import SetCurrentClothing from "./setClothingData";
import {Container} from "./style";

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
    const selectedClothingData = useSelector(
        (state: RootState) => state.clothes.value as ClothingItem[]
    );
    const clothingId = id ? parseInt(id) : -1;
    SetCurrentClothing();

    if (!selectedClothingData) {
        return null; // Handle the case where data is not available
    }

    const colorArray = ["red", "orange", "yellow", "green", "blue", "navy", "purple"];
    const selectedColor = colorArray[clothingId];

    const filteredData = selectedClothingData.filter(
        (data) => data.color === selectedColor
    );

    return (
        <Container>
            {filteredData.map((item: ClothingItem, index: number) => (
                <div key={index} style={{display: "flex"}}>
                    <div>
                        <img
                            src={require(`${item.img}`)}
                            alt={`img ${index}`}
                            style={{width: "150px", height: "150px"}}
                        />
                        <p>
                            {item.name} {item.price}
                        </p>
                        <p>세부사항: {item.details}</p>
                        <p>소재: {item.material}</p>
                    </div>
                </div>
            ))}
        </Container>
    );
};

export default ClothingDetails;
