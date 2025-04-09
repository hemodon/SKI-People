import { newEl } from "../js/source";

let rendered = false;

export const main = () => {
  if (rendered) {
    return document.querySelector("main");
  }

  const el = newEl("main");
  document.body.append(el);
  rendered = true;

  return el;
};
