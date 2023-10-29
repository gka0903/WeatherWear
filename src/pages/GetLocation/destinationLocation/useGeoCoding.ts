import key from "../../../keys/geoCodingKey";

const useGeoCoding = () => {
    const apiKey = key;
    const address = '1600 Amphitheatre Parkway, Mountain View, CA';

    // const formattedAddress = encodeURIComponent(address);

    fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=Toledo&key=${apiKey}`)
        .then(response => response.json())
        .then(data => {
            if (data.status === 'OK') {
                const formattedResult = data.results[0].formatted_address;
                console.log(`Address for ${address}: ${formattedResult}`);
            } else {
                console.error('Unable to find the address for the specified place.');
            }
        })
        .catch(error => console.error('Error fetching data from the API', error));

    return 0;
};

export default useGeoCoding;
