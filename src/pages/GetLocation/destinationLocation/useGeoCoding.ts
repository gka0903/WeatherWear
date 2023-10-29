import key from "../../../keys/geoCoding";

const useGeoCoding = () => {
    const apiKey = key;
    const address = '한성대학교';

    const formattedAddress = encodeURIComponent(address);

    fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${formattedAddress}&key=${apiKey}`)
        .then(response => response.json())
        .then(data => {
            if (data.status === 'OK') {
                const formattedResult = data.results[0].formatted_address;
                console.log(data);
                console.log(`Address for ${address}: ${formattedResult}`);
            } else {
                console.error('Unable to find the address for the specified place.');
            }
        })
        .catch(error => console.error('Error fetching data from the API', error));

    return 0;
};

export default useGeoCoding;
