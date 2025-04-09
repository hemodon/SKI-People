import Navigo from "navigo";
import { header } from "../components/header";
import { footer } from "../components/footer";
import { main } from "../components/main";
import { productList } from "../components/productList";
import { getData } from "./api";

const router = new Navigo("/", { linksSelector: "a[href^='/']" });

export const initRouter = () => {
  router
    .on("/", async () => {
      const goods = await getData();

      header();
      productList("Список товара", goods, main());
      footer();
    })
    .on("/product", () => {
      console.log("product");
    })
    .notFound(() => {
      document.body.innerHTML =
        "<h2>Error 404 - такой страницы не существует</h2>";
    });
  router.resolve();
};
