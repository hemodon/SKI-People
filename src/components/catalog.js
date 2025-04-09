import { newEl } from "../js/source";
import { layout } from "./layout";

const child = `
  <ul class="catalog__list">
    <li class="catalog__item">
      <a href="#" class="catalog__link catalog__link--active">Все </a>
    </li>
    <li class="catalog__item">
      <a href="#" class="catalog__link">Лыжи</a>
    </li>
    <li class="catalog__item">
      <a href="#" class="catalog__link">Сноуборды</a>
    </li>
    <li class="catalog__item">
      <a href="#" class="catalog__link">Экипировка</a>
    </li>
    <li class="catalog__item">
      <a href="#" class="catalog__link">Ботинки</a>
    </li>
  </ul>
`;

let rendered = false;

export const catalog = () => {
  if (rendered) {
    return "";
  }

  const el = newEl("div", "catalog");

  el.append(layout(child));
  rendered = true;

  return el;
};
