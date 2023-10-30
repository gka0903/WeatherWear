import {Section} from './styles';
import AppLayout from "../../components/AppLayout";
import MyLocation from "../GetLocation/myLocation/myLocation";
import DestinationLocation from "../GetLocation/destinationLocation/destinationLocation";

function Home() {
    return (
        <AppLayout>
            <Section>
                <div>
                    <div>환영합니다 박수짝짝</div>
                    <DestinationLocation/>
                    <MyLocation/>
                </div>
            </Section>
        </AppLayout>
    );
}

export default Home;