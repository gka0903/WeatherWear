import { Section } from './styles';
import AppLayout from "../../components/AppLayout";

function Home() {
    return (
        <AppLayout>
            <Section>
                <div>
                    <div>환영합니다 박수짝짝</div>
                </div>
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
            </Section>
        </AppLayout>
    );
}

export default Home;