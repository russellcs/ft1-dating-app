export function storeData(keyName, data) {
  localStorage.setItem(keyName, JSON.stringify(data));
}

export function getData(key) {
  return JSON.parse(localStorage.getItem(key));
}
