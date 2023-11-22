import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";
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
    SetCurrentClothing();

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