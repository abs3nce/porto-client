import PortfiolioPage from "./src/pages/PortfolioPage.vue";
import ProfilePage from "./src/pages/ProfilePage.vue";
import LoginPage from "./src/pages/LoginPage.vue";
import RegisterPage from "./src/pages/RegisterPage.vue";
import AddImagePage from "./src/pages/AddImagePage.vue";
import ExplorePage from "./src/pages/ExplorePage.vue";
import PageNotFound from "./src/pages/PageNotFound.vue";

export default [
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
    {
        path: "/explore",
        component: ExplorePage,
    },
    {
        path: "/post",
        component: AddImagePage,
    },
    {
        path: "*",
        component: PageNotFound,
    },
];
