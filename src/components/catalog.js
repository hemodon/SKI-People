import { newEl } from "../js/source";
import { layout } from "./layout";

let rendered = false;

export const catalog = (parent, goods = []) => {
  if (rendered) {
    return document.querySelector(".catalog");
  }

  const types = goods.map(({ type }) => type);
  const list = [...new Set(types)]
    .map(
      (item) => `
      <li class="catalog__item">
        <a href="#" class="catalog__link">${item}</a>
      </li>
    `
    )
    .join("");

  const child = `
    <ul class="catalog__list">
      <li class="catalog__item">
        <a href="#" class="catalog__link catalog__link--active">Все</a>
      </li>
      ${list}
    </ul>
  `;

  const el = newEl("div", "catalog");

  el.append(layout(child));
  parent.append(el);
  rendered = true;

  return el;
};
