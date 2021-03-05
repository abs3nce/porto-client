import PortfiolioPage from "./src/pages/PortfolioPage.vue";
import PageNotFound from "./src/pages/PageNotFound.vue";

export default [
    {
        path: "*",
        component: PageNotFound,
    },
    {
        path: "/pf",
        component: PortfiolioPage,
    },
];
