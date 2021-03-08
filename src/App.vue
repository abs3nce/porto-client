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

    //accents
    --acc-blue: #3645fbff;
    --acc-purple: #a26fe0ff;
    --acc-pink: #c97ebeff;
    --acc-orange: #ef8d79ff;
    --acc-yellow: #fe922aff;

    //gradients
    --grad-galaxy: linear-gradient(
        135deg,
        #3645fbff,
        #a26fe0ff,
        #c97ebeff,
        #ef8d79ff,
        #fe922aff
    );

    //backgrounds
    --bg-dark-blue: #242f40;

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
    background-color: var(--acc-blue);
    // border-radius: 128px;
}

/* =========================================================
                          Styling
   =========================================================*/
.app-wrap {
    background-image: var(--grad-galaxy);
    min-height: 100vh;
}

/* =========================================================
                          Layout
   =========================================================*/
</style>
