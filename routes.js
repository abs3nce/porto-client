import PortfiolioPage from "./src/pages/PortfolioPage.vue";
import ProfilePage from "./src/pages/ProfilePage.vue";
import LoginRegisterPage from "./src/pages/LoginRegisterPage.vue";
import PageNotFound from "./src/pages/PageNotFound.vue";

export default [
    {
        path: "*",
        component: PageNotFound,
    },
    {
        path: "/portfolio",
        component: PortfiolioPage,
    },
    {
        path: "/profile",
        component: ProfilePage,
    },
    {
        path: "/join",
        component: LoginRegisterPage,
    },
];
