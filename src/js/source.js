export const newEl = (tag, ...classList) => {
  const el = document.createElement(tag);

  if (classList) {
    el.classList.add(...classList);
  }

  return el;
};
