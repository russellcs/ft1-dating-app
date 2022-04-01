// import messages from "./mock";
import axios from "axios";

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
      longitude: 0,
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
  return distanceInKmBetweenEarthCoordinates(lat1, lon1, lat2, lon2);
};

export const getAge = (dob) => {
  const dateString = `${dob.year}-${dob.months}-${dob.day}`;
  let birthDate = new Date(dateString);
  let now = new Date();
  let currentYear = now.getFullYear();
  let userYear = birthDate.getFullYear();
  let age = currentYear - userYear;
  if (now < new Date(birthDate.setFullYear(currentYear))) {
    age--;
  }
  return age;
};

export function getUniqueId(length) {
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
