
import {Section} from './styles';
import AppLayout from "../../components/AppLayout";
import Location from "../GetLocation/destinationLocation/Location";

import {useSelector} from "react-redux";


import React from "react";
import {Route, Routes} from "react-router-dom";
import WeatherIcons from '../Weather/WeatherIcons';
import FortuneCookie from "../FortuneCookie/FortuneCookie";
import NotFound from "../notFound/notFound";
import {RootState} from "../redux/store";
import RecommendClothing from "../Clothing/RecommendClothing";
import ClothingDetails from "../Clothing/ClothingDetails";


function Home() {
    const currentTemp = useSelector((state: RootState) => state.temperature.value);
    const currentClothing = useSelector((state: RootState) => state.clothes.value);
    const location = useSelector((state: RootState) => state.location.value);

    return (
        <AppLayout>
            <Routes>
    {/*
            <Route path="/" element={
            <>
            <Section>
                <Location/>
            </Section>
                {location.lat && location.lng && (
                <aside>
                    <WeatherIcons latitude={location.lat} longitude={location.lng}/>
                </aside>
                )}
            </>
        }></Route>
    */}
                <Route path="/" element={<Section><Location/></Section>}></Route>
                <Route path="/weather" element={
        <aside>
            <WeatherIcons latitude={location.lat} longitude={location.lng}/>
        </aside>
            }/>
                <Route path="/details" element={<Section><RecommendClothing/></Section>}/>
                <Route path="/details/:id"
                        element={<ClothingDetails currentTemp={currentTemp} currentClothing={currentClothing}/>}/>
                <Route path="/fortune" element={<Section><FortuneCookie/></Section>}></Route>
                <Route path="*" element={<NotFound/>}></Route>
            </Routes>
        </AppLayout>

    );
}

export default Home;