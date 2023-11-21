import {Section} from './styles';
import Location from "../GetLocation/destinationLocation/Location";


import React from "react";
import {Route, Routes} from "react-router-dom";

import FortuneCookie from "../FortuneCookie/FortuneCookie";
import NotFound from "../notFound/notFound";
import RecommendClothing from "../Clothing/RecommendClothing";
import ClothingDetails from "../Clothing/ClothingDetails";
<<<<<<< HEAD
import TypeDetails from "../Clothing/TypeDetails";


=======
import Temperature from "../SetTemperature/Temperature";
import AppLayout from "../../components/AppLayout";
>>>>>>> eb96d02cb9a20895b9b0e27401d8d7ba739116ff


function Home() {
    return (
        <AppLayout>
            <Routes>
                <Route path="/" element={<Section><Location/></Section>}></Route>
                <Route path="/temperature" element={<Section><Temperature/></Section>}></Route>
                <Route path="/details" element={<Section><RecommendClothing/></Section>}/>
                <Route path="/details/:id"
<<<<<<< HEAD
                       element={<Section><ClothingDetails currentTemp={currentTemp}/></Section>}/>
                <Route path="/typedetails/:id" element={<Section><TypeDetails currentTemp={currentTemp}/></Section>}/>
=======
                       element={<Section><ClothingDetails/></Section>}/>
>>>>>>> eb96d02cb9a20895b9b0e27401d8d7ba739116ff
                <Route path="/fortune" element={<Section><FortuneCookie/></Section>}></Route>
                <Route path="*" element={<NotFound/>}></Route>
            </Routes>
        </AppLayout>


    );
}

export default Home;