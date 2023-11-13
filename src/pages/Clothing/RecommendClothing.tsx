import img1 from "../../images/img1.jpg";
import img2 from "../../images/img2.jpg";
import img3 from "../../images/img3.jpg";
import img4 from "../../images/img4.jpg";
import img5 from "../../images/img5.jpg";
import img6 from "../../images/img6.jpg";
import img7 from "../../images/img7.jpg";
import img8 from "../../images/img8.jpg";

import React, { useState, useEffect } from "react";

const RecommendClothing = () => {
    const clothingArr: string[] = [img1,img2,img3,img4,img5,img6,img7,img8];

    const [currentTemp, setCurrentTemp] = useState(0);
    const [currentClothing, setCurrentClothing] = useState<string>('');
    
    const recommendClothing = (temp :  number) => {
        let clothing : string;

        if (temp > 28){
            clothing = clothingArr[0];
        }else if(temp<=27&&temp>=24){
            clothing = clothingArr[1];
        }else if(temp<=23&&temp>=20){
            clothing = clothingArr[2];
        }else if(temp<=19&&temp>=17){
            clothing = clothingArr[3];
        }else if(temp<=16&&temp>=11){
            clothing = clothingArr[4];
        }else if(temp<=10&&temp>=6){
            clothing = clothingArr[5];
        }else if(temp<=8&&temp>=5){
            clothing = clothingArr[6];
        }else{
            clothing = clothingArr[7]
        }
        return clothing;
    }

    useEffect(() => {
        setCurrentClothing(recommendClothing(currentTemp));
    }, [currentTemp]);

    return (
        <div>
            <img src= {currentClothing} alt="recommendClothing"/>
        </div>
    )

}

export default RecommendClothing;
