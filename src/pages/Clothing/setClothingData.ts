import clothingData from "./clothingData.json"
import {useDispatch, useSelector} from "react-redux";
import {setClothes} from "../../redux/slices/clothesSlice";
import {RootState} from "../../redux/store";
import {useEffect} from "react";

const SetCurrentClothing = () => {
    const currentTemp = useSelector((state: RootState) => state.temperature.value);
    const dispatch = useDispatch();

    useEffect(() => {
        if (currentTemp >= 28) {
            dispatch(setClothes(clothingData.clothes.filter(data => data.temp === 28)));
        } else if (currentTemp >= 24 && currentTemp <= 27) {
            dispatch(setClothes(clothingData.clothes.filter(data => data.temp === 24)));
        } else if (currentTemp >= 20 && currentTemp <= 23) {
            dispatch(setClothes(clothingData.clothes.filter(data => data.temp === 20)));
        } else if (currentTemp >= 17 && currentTemp <= 19) {
            dispatch(setClothes(clothingData.clothes.filter(data => data.temp === 17)));
        } else if (currentTemp >= 11 && currentTemp <= 16) {
            dispatch(setClothes(clothingData.clothes.filter(data => data.temp === 11)));
        } else if (currentTemp >= 6 && currentTemp <= 10) {
            dispatch(setClothes(clothingData.clothes.filter(data => data.temp === 6)));
        } else if (currentTemp >= 0 && currentTemp <= 5) {
            dispatch(setClothes(clothingData.clothes.filter(data => data.temp === 0)));
        } else {
            dispatch(setClothes(clothingData.clothes.filter(data => data.temp === -10)));
        }
    }, [currentTemp, dispatch]);
};

export default SetCurrentClothing;