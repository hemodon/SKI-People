import { newEl } from "../js/source";
import { layout } from "./layout";
import { productItem } from "./productItem";

let rendered = false;

export const productList = (title, goods, mainEl) => {
  if (rendered) {
    return;
  }

  let currentCatalog = "все";
  const catalogList = document.querySelector(".catalog");
  const catalogLinks = catalogList.querySelectorAll(".catalog__link");
  
  const el = newEl("section", "goods");
  const child = `
    <h2 class="goods__title">${title}</h2>
    <ul class="goods__list">
    ${goods.map(productItem).join("")}
    </ul>
  `;
  
  el.append(layout(child));

  mainEl.append(el);
  rendered = true;

  if (catalogList) {
    catalogList.addEventListener("click", (e) => {
      const goodsListEl = document.querySelector(".goods__list");
      const search = e.target.textContent.toLowerCase();

      if (!e.target.closest(".catalog__link") || search === currentCatalog) {
        return;
      }

      let refreshList = [...goods];

      currentCatalog = search;
      catalogLinks.forEach((link) =>
        link.classList.remove("catalog__link--active")
      );
      e.target.classList.add("catalog__link--active");

      if (search !== "все") {
        refreshList = goods.filter(({ type }) => type.toLowerCase() === search);
      }

      goodsListEl.textContent = "";
      goodsListEl.insertAdjacentHTML(
        "afterBegin",
        refreshList.map(productItem).join("")
      );
    });
  }

  return el;
};
