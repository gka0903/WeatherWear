import {Section} from './styles';
import AppLayout from "../../components/AppLayout";
import useGeolocation from '../GetLocation/myLocation/useGeolocation';
import Location from "../GetLocation/destinationLocation/Location";


import {Provider} from "react-redux";
import {store} from "../redux/store";
import React from "react";
import {Route, Routes} from "react-router-dom";

import FortuneCookie from "../FortuneCookie/FortuneCookie";
import NotFound from "../notFound/notFound";


function Home() {
    const geo = useGeolocation();
    console.log(geo);
    return (
        <Provider store={store}>
            <AppLayout>
                <Routes>
                    <Route path="/" element={<Section><Location/></Section>}></Route>
                    <Route path="/fortune" element={<Section><FortuneCookie/></Section>}></Route>
                    <Route path="*" element={<NotFound/>}></Route>
                </Routes>
            </AppLayout>
        </Provider>

    );
}

export default Home;