export function storeData(keyName, data) {
  localStorage.setItem(keyName, JSON.stringify(data));
}

export function getData() {
  return {
    users: JSON.parse(localStorage.getItem("users")),
    messages: JSON.parse(localStorage.getItem("messages")),
  };
}
