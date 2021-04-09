import PortfiolioPage from "./src/pages/PortfolioPage.vue";
import ProfilePage from "./src/pages/ProfilePage.vue";
import LoginPage from "./src/pages/LoginPage.vue";
import RegisterPage from "./src/pages/RegisterPage.vue";
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
        path: "/login",
        component: LoginPage,
    },
    {
        path: "/register",
        component: RegisterPage,
    },
];
