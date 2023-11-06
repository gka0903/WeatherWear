import {Section} from './styles';
import AppLayout from "../../components/AppLayout";

import Location from "../GetLocation/destinationLocation/Location";

import FortuneCookie from "../FortuneCookie/FortuneCookie";


function Home() {
    return (
        <AppLayout>
            <Section>
                <Location/>
            </Section>
            <FortuneCookie/>
        </AppLayout>
    );
}

export default Home;