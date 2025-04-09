import { newEl } from "../js/source";
import { layout } from "./layout";
import { productItem } from "./productItem";

let rendered = false;

export const productList = (title, goods, mainEl) => {
  if (rendered) {
    return;
  }

  console.log("goods: ", goods);

  const child = `
    <h2 class="goods__title">${title}</h2>
    <ul class="goods__list">
      ${goods.map(productItem).join("")}
    </ul>
  `;
  const el = newEl("section", "goods");

  mainEl.append(layout(child));
  rendered = true;

  return el;
};
