import {Section} from './styles';
import AppLayout from "../../components/AppLayout";

import Location from "../GetLocation/destinationLocation/Location";
import {Provider} from "react-redux";
import {store} from "../redux/store";


function Home() {
    return (
        <Provider store={store}>
            <AppLayout>
                <Section>
                    <Location/>
                </Section>
                {/*<Section>*/}
                {/*    <Wear/>*/}
                {/*</Section>*/}
                {/*<Section>*/}
                {/*    <FortuneCookie/>*/}
                {/*</Section>*/}
            </AppLayout>
        </Provider>
    );
}

export default Home;