import {Section} from './styles';
import Location from "../GetLocation/destinationLocation/Location";


import React from "react";
import {Route, Routes} from "react-router-dom";
import WeatherIcons from '../Weather/WeatherIcons';
import FortuneCookie from "../FortuneCookie/FortuneCookie";
import NotFound from "../notFound/notFound";
import RecommendClothing from "../Clothing/RecommendClothing";
import ClothingDetails from "../Clothing/ClothingDetails";
import Temperature from "../SetTemperature/Temperature";
import AppLayout from "../../components/AppLayout";


function Home() {
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
                <Route path="/temperature" element={<Section><Temperature/></Section>}></Route>
                <Route path="/details" element={<Section><RecommendClothing/></Section>}/>
                <Route path="/details/:id"
                       element={<Section><ClothingDetails/></Section>}/>
                <Route path="/fortune" element={<Section><FortuneCookie/></Section>}></Route>
                <Route path="*" element={<NotFound/>}></Route>
            </Routes>
        </AppLayout>


    );
}

export default Home;