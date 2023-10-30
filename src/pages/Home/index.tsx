import {Section} from './styles';
import AppLayout from "../../components/AppLayout";
import Location from "../GetLocation/destinationLocation/Location";

function Home() {
    return (
        <AppLayout>
            <Section>
                <Location/>
            </Section>
        </AppLayout>
    );
}

export default Home;