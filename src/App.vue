<template>
    <div class="app-wrap">
        <Navbar />
        <router-view></router-view>
    </div>
</template>

<script>
import Navbar from "./shell/Navbar.vue";

import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
Vue.use(VueAxios, axios);

export default {
    name: "App",
    components: {
        Navbar,
    },
};
</script>

<style lang="scss">
/* =========================================================
                            GLOBAL
   =========================================================*/
:root {
    //globalne variables pre farby

    //text
    --text-primary: #1b1b1b;
    --text-secondary: #646464;

    //pozadia
    --bg-purple-1: #250a3f;

    //accenty
    --acc-blue-1: #6370e7;
    --acc-blue-2: #8ae4ff;

    --acc-purple-1: #8d72e6;
    --acc-purple-2: #b875e6;
    --acc-purple-3: #f4a2ff;

    //ostatne variables

    //rychlosti
    --transition-speed: 500ms;

    //velkosti
    --navbar-height: 96px;
    --site-height: calc(100vh - var(--navbar-height));
}

html,
*,
body {
    margin: 0;
    padding: 0;
}

/* =========================================================
                        Webkity a fonty
   =========================================================*/
body::-webkit-scrollbar {
    width: 0.25rem;
}
body::-webkit-scrollbar-track {
    background-color: black;
}
body::-webkit-scrollbar-thumb {
    background-color: var(--acc-blue-2);
    // border-radius: 128px;
}

/* =========================================================
                          Styling
   =========================================================*/
.app-wrap {
    // background-color: var(--bg-primary);
    background-image: linear-gradient(
        to right top,
        var(--acc-blue-2),
        var(--acc-purple-3)
    );
}

/* =========================================================
                          Layout
   =========================================================*/
</style>
