function loadData(key) {
  try {
    let data = localStorage.getItem(key);
    return data;
  } catch (err) {
    return undefined;
  }
}

function saveData(key, data) {
  localStorage.setItem(key,data);
}

export { loadData, saveData };
