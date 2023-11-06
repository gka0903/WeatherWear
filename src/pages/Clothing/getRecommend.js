import React, { useState } from "react";

const getRecommend = () => {
    const clothingArr = [img1, img2, img3, img4, img5, img6, img7];
    
    // useState함수를 이용해서 currenClothing을 계속 바꾸고  currentClothing에 해당하는 이미지를 화면에 보여준다
    const [currentClothing, setCurrendClothing] = useState(1);

    // 옷을 랜덤으로 돌린다
    const changeClothing = () => {
        setCurrendClothing(Math.floor(Math.random()*clothingArr.length));
    };

    // 100ms마다 이미지 바뀐다
    const random = setTimeout(() => {
        changeClothing();
    }, 100);

    // 화면 클릭하면 이미지가 멈춘다
    const stopRandom = e => {
        clearTimeout(random);
    };
    return (
        <>
        <title>이런 옷 어때?</title>
        <Background className = "background">
            <Wrapper
            src={'/images/Clothings${currentClothing}.jpg'}   // 옷 이미지를 폴더에서 가져온다
            alt="옷 랜덤 이미지"
            onClick={stopRandom}
            />
            <ImgTitle>{imgTitle[currentClothing]}</ImgTitle>
        </Background>
        </>
    )    
};

export default getRecommend;