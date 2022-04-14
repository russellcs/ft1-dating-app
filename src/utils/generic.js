// import messages from "./mock";
import axios from "axios";

// retreives a long and lat from a valid uk postcode, returns location of central london if unsuccessful 
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
      latitude: 51.509865,
      longitude: -0.118092, 
    };
  }
};

// Haversine function - converts degrees to radians - from stack overflow
function degreesToRadians(degrees) {
  return (degrees * Math.PI) / 180;
}

//finds distance between 2no long and lat co-ordinates
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

// splits two locations into respective longs and lats, and runs function to find distance between them
export const findDistanceFromLongsAndLats = (location1, location2) => {
  const lat1 = location1.latitude;
  const lat2 = location2.latitude;
  const lon1 = location1.longitude;
  const lon2 = location2.longitude;
  return distanceInKmBetweenEarthCoordinates(lat1, lon1, lat2, lon2);
};

// function that returns a unique id of a specific length when given
// default? 32?
export function getUniqueId(length) {
  // return Math.round(Math.random() * 10000000000);
  const now = Date.now().toString();
  let uniqueId = "";
  const chars =
    "ABCDEFGHIJUKLMNOPQRSTUVWXYZ0123456789abcdefghijklmnopqrstuvwxyz";
  const charsLength = chars.length;

  for (let index = 0; index < length - now.length; index++) {
    uniqueId += chars.charAt(Math.floor(Math.random() * charsLength));
  }
  return uniqueId + Date.now();
}
