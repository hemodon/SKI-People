import Navigo from "navigo";
import { header } from "./components/header";
import { footer } from "./components/footer";
import { favorite } from "./components/favorite";

const router = new Navigo("/", { linksSelector: "a[href^='/']" });

export const initRouter = () => {
  router
    .on("/", () => {
      document.body.append(header(), footer());
    })
    .on("/favorite", () => {
      document.body.append(header(), favorite(), footer());
    })
    .notFound(() => {
      console.log("ERROR 404");
    });
  router.resolve();
};

// 21:32
