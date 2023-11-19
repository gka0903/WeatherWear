import React, {useEffect, useState} from "react";
import {Link} from 'react-router-dom';
import set_img from "./set_img.json";
import {useSelector} from "react-redux";
import {RootState} from "../redux/store";


const RecommendClothing = () => {
    const currentTemp = useSelector((state: RootState) => state.temperature.value);
    const [currentClothing, setCurrentClothing] = useState<Array<string>>([]);

    const recommendClothing = (temp: number) => {
        if (temp >= 28) {
            setCurrentClothing(set_img[28]);
        } else if (temp >= 24) {
            setCurrentClothing(set_img[24])
        } else if (temp >= 20) {
            setCurrentClothing(set_img[20]);
        } else if (temp >= 17) {
            setCurrentClothing(set_img[17]);
        } else if (temp >= 11) {
            setCurrentClothing(set_img[11]);
        } else if (temp >= 9) {
            setCurrentClothing(set_img[9]);
        } else if (temp >= 5) {
            setCurrentClothing(set_img[5]);
        } else setCurrentClothing(set_img[0]);

    }

    useEffect(() => {
        recommendClothing(currentTemp);
    }, [currentTemp]);

    return (
        <>
            {currentClothing.map((img, index) => (
                <li key={index}>
                    {`${index + 1} 세트`}
                    <Link to={`/details/${index}`}>
                        <img src={require(`${img}`)} alt={`img ${index}`} style={{width: "150px", height: "150px"}}/>
                    </Link>
                </li>
            ))}
        </>
    );
}

export default RecommendClothing;