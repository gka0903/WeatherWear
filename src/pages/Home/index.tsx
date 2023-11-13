import {Section} from './styles';
import AppLayout from "../../components/AppLayout";
import Location from "../GetLocation/destinationLocation/Location";
import GetRecommend from '../Clothing/RecommendClothing';
import RecommendClothing from '../Clothing/RecommendClothing';

function Home() {
    return (
        <AppLayout>
            <Section>
                <Location/>
                <RecommendClothing/>
            </Section>
        </AppLayout>
    );
}

export default Home;