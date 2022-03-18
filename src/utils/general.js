// import messages from "./mock";
import axios from "axios";

// console.log(messages);

export const getLngLat = async (postcode) => {
  try {
    const result = await axios.get(
      "https://api.postcodes.io/postcodes/ " + postcode
    );

    return {
      latitude: result.data.result.latitude,
      longitude: result.data.result.longitude,
    };
  } catch (error) {
    return {
      latitude: 0,
      longitude: 0, //change to london
    };
  }
};

// Haversine function - from stack overflow
function degreesToRadians(degrees) {
  return (degrees * Math.PI) / 180;
}

function distanceInKmBetweenEarthCoordinates(lat1, lon1, lat2, lon2) {
  const earthRadiusKm = 6371;

  const dLat = degreesToRadians(lat2 - lat1);
  const dLon = degreesToRadians(lon2 - lon1);

  lat1 = degreesToRadians(lat1);
  lat2 = degreesToRadians(lat2);

  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return earthRadiusKm * c;
}

export const findDistanceFromLongsAndLats = (location1, location2) => {
  const lat1 = location1.latitude;
  const lat2 = location2.latitude;
  const lon1 = location1.longitude;
  const lon2 = location2.longitude;
  // console.log(location2);
  return distanceInKmBetweenEarthCoordinates(lat1, lon1, lat2, lon2);
};
