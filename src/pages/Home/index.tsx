import {Section} from './styles';
import AppLayout from "../../components/AppLayout";

import Location from "../GetLocation/destinationLocation/Location";

import FortuneCookie from "../FortuneCookie/FortuneCookie";
import Wear from "../Weather/Wear";


function Home() {
    return (
        <AppLayout>
            <Section>
                <Location/>
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