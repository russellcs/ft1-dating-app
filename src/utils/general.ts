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

// export function add(x, y) {
//   return x + y;
// }

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
  console.log(uniqueId + Date.now());
  return uniqueId + Date.now();
}
