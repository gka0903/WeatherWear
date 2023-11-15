import key from "../../../keys/geoCoding";
import {useState} from "react";


const useGeoCoding = (location: string) => {
    const [data, setData] = useState({});
    const apiKey = key;

    const formattedAddress = encodeURIComponent(location);

    fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${formattedAddress}&key=${apiKey}`)
        .then(response => response.json())
        .then(data => {
            if (data.status === 'OK') {
                const formattedResult = data.results[0].formatted_address;
                setData(data);
                console.log(`Address for ${location}: ${formattedResult}`);
            } else {
                console.error('Unable to find the address for the specified place.');
            }
        })
        .catch(error => console.error('Error fetching data from the API', error));

    return JSON.stringify(data);
};

export default useGeoCoding;
