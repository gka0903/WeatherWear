import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import SetCurrentClothing from "./setClothingData";
import {RootState} from "../../redux/store";
import {Container} from "./style";
import styled from "styled-components";


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

const ImgBox = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;


const TypeDetails = () => {
    const {id} = useParams<{ id: string }>();
    const selectedClothingData = useSelector((state: RootState) => state.clothes.value as ClothingItem[]);
    SetCurrentClothing();

    return (
        <Container>
            {selectedClothingData && selectedClothingData
                .filter(data => data.type === id)
                .map((item: any, index: number) => (
                    <div key={index} style={{display: 'flex'}}>
                        <ImgBox>
                            <img
                                src={require(
                                    `${item.img}`
                                )}
                                alt={`img ${index}`} style={{width: "150px", height: "150px"}}/>
                            <p>{item.name} {item.price}</p>
                        </ImgBox>
                    </div>
                ))}
        </Container>
    );
};

export default TypeDetails;