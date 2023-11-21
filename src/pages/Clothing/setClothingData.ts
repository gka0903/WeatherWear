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
            // Handle other cases if needed
        } else if (currentTemp >= 20 && currentTemp <= 23) {
            // Handle other cases if needed
        } else if (currentTemp >= 17 && currentTemp <= 19) {
            // Handle other cases if needed
        } else if (currentTemp >= 11 && currentTemp <= 16) {
            // Handle other cases if needed
        } else if (currentTemp >= 6 && currentTemp <= 10) {
            // Handle other cases if needed
        } else {
            dispatch(setClothes(clothingData.clothes.filter(data => data.temp === 0)));
        }
    }, [currentTemp, dispatch]);

    // You might return something if needed, or keep it as a pure utility function
    return null;
};

export default SetCurrentClothing;