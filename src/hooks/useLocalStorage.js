export function useLocalStorage() {
  const setNewItem = (key, value) => localStorage.setItem(key, JSON.stringify(value));
  const getNewItem = (key) => {
    return JSON.parse(localStorage.getItem(key));
  };
  const removeSomeItem = (key) => localStorage.removeItem(key);
  const clearStorage = () => localStorage.clear();

  return { setNewItem, getNewItem, removeSomeItem, clearStorage };
}
