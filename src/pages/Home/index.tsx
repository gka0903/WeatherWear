import {Section} from './styles';
import AppLayout from "../../components/AppLayout";
import useGeolocation from '../GetLocation/myLocation/useGeolocation';
import Location from "../GetLocation/destinationLocation/Location";
import GetRecommend from '../Clothing/RecommendClothing';
import RecommendClothing from '../Clothing/RecommendClothing';

import FortuneCookie from "../FortuneCookie/FortuneCookie";

import WeatherIcons from '../Weather/WeatherIcons';


function Home() {
    const geo = useGeolocation(); 
    console.log(geo);
    return (
        <AppLayout>
            <Section>
                <Location/>
                <RecommendClothing/>
            </Section>
            <aside>
                    {geo.loaded && geo.coordinates && (
                    <WeatherIcons latitude={geo.coordinates.lat} longitude={geo.coordinates.lng} />
                )}
            </aside>
            <Section>
                <FortuneCookie/>
            </Section>
        </AppLayout>
    );
}

export default Home;