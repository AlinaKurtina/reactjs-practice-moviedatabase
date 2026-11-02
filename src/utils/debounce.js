export function debounce(func, delay) {
  let timeoutId;
  const fn = (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func(...args), delay);
  };

  fn.cancel = () => clearTimeout(timeoutId);

  return fn;
}
