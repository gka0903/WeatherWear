import React, {useEffect, useState} from "react";
import {Link} from 'react-router-dom';
import set_img from "./set_img.json";
import {useSelector} from "react-redux";
import {RootState} from "../../redux/store";
import {Container, Item} from "./style";


const RecommendClothing = () => {
    const currentTemp = useSelector((state: RootState) => state.temperature.value);
    const [currentClothing, setCurrentClothing] = useState<Array<string>>([]);

    const recommendClothing = () => {
        if (currentTemp >= 28) {
            setCurrentClothing(set_img[28]);
        } else if (currentTemp >= 24 && currentTemp <= 27) {
            setCurrentClothing(set_img[24])
        } else if (currentTemp >= 20 && currentTemp <= 23) {
            setCurrentClothing(set_img[20]);
        } else if (currentTemp >= 17 && currentTemp <= 19) {
            setCurrentClothing(set_img[17]);
        } else if (currentTemp >= 11 && currentTemp <= 16) {
            setCurrentClothing(set_img[11]);
        } else if (currentTemp >= 6 && currentTemp <= 10) {
            setCurrentClothing(set_img[6]);
        } else if (currentTemp >= 0 && currentTemp <= 5) {
            setCurrentClothing(set_img[0]);
        } else setCurrentClothing(set_img[-10]);
    }

    useEffect(() => {
        recommendClothing();
    }, [currentTemp]);

    return (
        <Container>
            {currentClothing.map((img, index) => (
                <Item flexBasis={index < 3 ? '0 1 33%' : '1 0 25%'} key={index}>
                    <Link to={`/details/${index}`}>
                        <img src={require(`${img}`)} alt={`img ${index}`} style={{width: "150px", height: "150px"}}/>
                    </Link>
                </Item>
            ))}
        </Container>
    );
}

export default RecommendClothing;

