<<<<<<< HEAD
import key from "../../../keys/geoCodingKey";


=======
import key from '../../../keys/geoCoding';
>>>>>>> eb96d02cb9a20895b9b0e27401d8d7ba739116ff

const useGeoCoding = async (location: string) => {
  const apiKey = key;

  const formattedAddress = encodeURIComponent(location);
  let formattedResult;

  try {
    const response = await fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${formattedAddress}&key=${apiKey}`
    );
    const data = await response.json();

    if (data.status === 'OK') {
      formattedResult = data.results[0].geometry.location;
      console.log(`Address for ${location}: ${formattedResult}`);
    } else {
      console.error('Unable to find the address for the specified place.');
    }
  } catch (error) {
    console.error('Error fetching data from the API', error);
  }

  return formattedResult;
};

export default useGeoCoding;
