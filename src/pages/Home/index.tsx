import {Section} from './styles';
import AppLayout from "../../components/AppLayout";
<<<<<<< HEAD
import ButtonUsage from "../../components/Nav/nav";
import VerticalNavbar from "../../components/Nav/nav";
import Wear from '../Weather/Wear';

=======
import Location from "../GetLocation/destinationLocation/Location";
>>>>>>> develop

function Home() {
    return (
        <AppLayout>
            <Section>
<<<<<<< HEAD
                <div>
                    <div>환영합니다 박수짝짝</div>
                    <ButtonUsage />
                </div>
            </Section>
            <Section>
                <Wear /> {/* 여기에 Wear 컴포넌트 추가 */}
            </Section>
            <Section>
                <div>
                    <div>두번째</div>
                    <div>콘텐츠입니다 박수짝짝</div>
                </div>
            </Section>
            <Section>
                <div>
                    <div>1</div>
                    <div>2</div>
                    <div>3</div>
                    <div>4</div>
                </div>
=======
                <Location/>
>>>>>>> develop
            </Section>
        </AppLayout>
    );
}

export default Home;