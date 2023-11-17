import img1 from "../../images/setimg/img1.jpg";
import img2 from "../../images/setimg/img2.jpg";
import img3 from "../../images/setimg/img3.jpg";
import img4 from "../../images/setimg/img4.jpg";
import img5 from "../../images/setimg/img5.jpg";
import img6 from "../../images/setimg/img6.jpg";
import img7 from "../../images/setimg/img7.jpg";
import img8 from "../../images/setimg/img8.jpg";
import img9 from "../../images/setimg/img9.jpg";
import img10 from "../../images/setimg/img10.jpg";
import img11 from "../../images/setimg/img11.jpg";
import img12 from "../../images/setimg/img12.jpg";
import img13 from "../../images/setimg/img13.jpg";
import img14 from "../../images/setimg/img14.jpg";
import img15 from "../../images/setimg/img15.jpg";
import img16 from "../../images/setimg/img16.jpg";
import img17 from "../../images/setimg/img17.jpg";
import img18 from "../../images/setimg/img18.jpg";
import img19 from "../../images/setimg/img19.jpg";
import img20 from "../../images/setimg/img20.jpg";
import img21 from "../../images/setimg/img21.jpg";
import img22 from "../../images/setimg/img22.jpg";
import img23 from "../../images/setimg/img23.jpg";
import img24 from "../../images/setimg/img24.jpg";
import img25 from "../../images/setimg/img25.jpg";
import img26 from "../../images/setimg/img26.jpg";
import img27 from "../../images/setimg/img27.jpg";
import img28 from "../../images/setimg/img28.jpg";
import img29 from "../../images/setimg/img29.jpg";
import img30 from "../../images/setimg/img30.jpg";
import img31 from "../../images/setimg/img31.jpg";
import img32 from "../../images/setimg/img32.jpg";
import img33 from "../../images/setimg/img33.jpg";
import img34 from "../../images/setimg/img34.jpg";
import img35 from "../../images/setimg/img35.jpg";
import img36 from "../../images/setimg/img36.jpg";
import img37 from "../../images/setimg/img37.jpg";
import img38 from "../../images/setimg/img38.jpg";
import img39 from "../../images/setimg/img39.jpg";
import img40 from "../../images/setimg/img40.jpg";
import img41 from "../../images/setimg/img41.jpg";
import img42 from "../../images/setimg/img42.jpg";
import img43 from "../../images/setimg/img43.jpg";
import img44 from "../../images/setimg/img44.jpg";
import img45 from "../../images/setimg/img45.jpg";
import img46 from "../../images/setimg/img46.jpg";
import img47 from "../../images/setimg/img47.jpg";
import img48 from "../../images/setimg/img48.jpg";
import img49 from "../../images/setimg/img49.jpg";
import img50 from "../../images/setimg/img50.jpg";
import img51 from "../../images/setimg/img51.jpg";
import img52 from "../../images/setimg/img52.jpg";
import img53 from "../../images/setimg/img53.jpg";
import img54 from "../../images/setimg/img54.jpg";
import img55 from "../../images/setimg/img55.jpg";
import img56 from "../../images/setimg/img56.jpg";

import React, { useState, useEffect } from "react";
import { Link, Route, Routes } from 'react-router-dom';
import ClothingDetails from "./ClothingDetails";


const RecommendClothing = () => {
    const clothingArr28: string[] = [img1,img2,img3,img4,img5,img6,img7];
    const clothingArr24to27: string[] = [img8,img9,img10,img11,img12,img13,img14];
    const clothingArr20to23: string[] = [img15,img16,img17,img18,img19,img20,img21];
    const clothingArr17to19: string[] = [img22,img23,img24,img25,img26,img27,img28];
    const clothingArr11to16: string[] = [img29,img30,img31,img32,img33,img34,img35];
    const clothingArr6to10: string[] = [img36,img37,img38,img39,img40,img41,img42];
    const clothingArr1to5: string[] = [img43,img44,img45,img46,img47,img48,img49];
    const clothingArr0: string[] = [img50,img51,img52,img53,img54,img55,img56];

    const [currentTemp, setCurrentTemp] = useState(28);
    const [currentClothing, setCurrentClothing] = useState<string[]>([]);
    
    const recommendClothing = (temp :  number) => {
        let clothing : string[];

        if (temp >= 28){
            clothing = clothingArr28;
        }
        else if(temp<=27&&temp>=24){
            clothing = clothingArr24to27
        }
        else if(temp<=23&&temp>=20){
            clothing = clothingArr20to23;
        }
        else if(temp<=19&&temp>=17){
            clothing = clothingArr17to19;
        }
        else if(temp<=16&&temp>=11){
            clothing = clothingArr11to16;
        }
        else if(temp<=10&&temp>=6){
            clothing = clothingArr6to10;
        }
        else if(temp<=8&&temp>=5){
            clothing = clothingArr1to5;
        }
        else{
            clothing = clothingArr0;
        }
        return clothing;
    }

    useEffect(() => {
        setCurrentClothing(recommendClothing(currentTemp));
    }, [currentTemp]);

    return (
        <div>
      {currentClothing.map((img, index) => (
        <li key={index}>
          {`${index + 1} 세트`}
          <Link to={`/Details/${index}`}>
            <img src={img} alt={`img ${index}`} style={{width: "150px", height: "150px"}} />
          </Link>
        </li>
      ))}
      <Routes>
        <Route path="/Details/:id" element={<ClothingDetails currentTemp={currentTemp} currentClothing={currentClothing}/>} />
      </Routes>
    </div>
    );
}

export default RecommendClothing;