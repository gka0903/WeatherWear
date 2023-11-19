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
import WeatherIcons from '../Weather/WeatherIcons';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

function Home() {

    const location = useSelector((state: RootState) => state.location.value);
    return (
        <Provider store={store}>
            <AppLayout>
                <Routes>
                    <Route path="/" element={<Section><Location/></Section>}></Route>
                    <Route path="/weatherIcons" element={
                        <aside>
                            <WeatherIcons latitude={location.lat} longitude={location.lng} />
                        </aside>
                    }></Route>
                    <Route path="/fortune" element={<Section><FortuneCookie/></Section>}></Route>
                    <Route path="*" element={<NotFound/>}></Route>
                </Routes>
            </AppLayout>
        </Provider>

    );
}

export default Home;