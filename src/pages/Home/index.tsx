import {Section} from './styles';
import AppLayout from "../../components/AppLayout";

import Location from "../GetLocation/destinationLocation/Location";
import GetRecommend from '../Clothing/RecommendClothing';
import RecommendClothing from '../Clothing/RecommendClothing';

import FortuneCookie from "../FortuneCookie/FortuneCookie";
import Wear from "../Weather/Wear";


function Home() {
    return (
        <AppLayout>
            <Section>
                <Location/>
                <RecommendClothing/>
            </Section>
            <Section>
                <Wear/>
            </Section>
            <Section>
                <FortuneCookie/>
            </Section>
        </AppLayout>
    );
}

export default Home;