import { newEl } from "../js/source";

export const layout = (child, extensionСlass) => {
  const el = newEl("div", "container");

  if (extensionСlass) {
    el.classList.add(extensionСlass);
  }
  el.innerHTML = child;

  return el;
};
