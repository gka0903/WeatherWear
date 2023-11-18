import {Section} from './styles';
import AppLayout from "../../components/AppLayout";

import Location from "../GetLocation/destinationLocation/Location";

import {Provider} from "react-redux";

import React from "react";
import {Route, Routes} from "react-router-dom";

import Wear from "../Weather/Wear";
import FortuneCookie from "../FortuneCookie/FortuneCookie";
import NotFound from "../notFound/notFound";
import {store} from "../redux/store";


function Home() {
    return (
        <Provider store={store}>
            <AppLayout>
                <Routes>
                    <Route path="/" element={<Section><Location/></Section>}></Route>
                    <Route path="/wear" element={<Section><Wear/></Section>}></Route>
                    {/*<Route path="/Details/:id"*/}
                    {/*       element={<ClothingDetails currentTemp={currentTemp} currentClothing={currentClothing}/>}/>*/}
                    <Route path="/fortune" element={<Section><FortuneCookie/></Section>}></Route>
                    <Route path="*" element={<NotFound/>}></Route>
                </Routes>
            </AppLayout>
        </Provider>
    );
}

export default Home;