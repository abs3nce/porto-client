<template>
    <div class="app-wrap">
        <Navbar />
        <router-view :key="$route.fullPath"></router-view>
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
@import url("https://fonts.googleapis.com/css2?family=Spartan&display=swap");

/* =========================================================
                            GLOBAL
   =========================================================*/
:root {
    //globalne variables pre farby

    //accents
    --dark-purple: #100035;
    --dark-cyan: #007d83;

    --text-white: #eee;

    --icon-cyan: #00c2ff;
    --icon-dark-cyan: #003b4d;
    --icon-hover: #00ffea;

    //gradients
    // --grad-site: linear-gradient(0, var(--acc-purple), var(--acc-deep-blue));
    background: var(--dark-purple);

    //backgrounds
    --bg-dark-blue: #00072f;

    //rychlosti
    --transition-speed: 500ms;

    //fonty a text

    --text-small: 12px;
    --text-medium: 24px;
    --text-large: 32px;

    //velkosti
    --navbar-height: 96px;
    --site-height: calc(100vh - var(--navbar-height));

    //ostatne variables
}

html,
body {
    margin: 0;
    padding: 0;
    font-family: "Spartan", sans-serif;
    height: 100%;
}

input,
button,
textarea {
    font-family: "Spartan", sans-serif;
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
    background-color: var(--icon-cyan);
    // border-radius: 128px;
}

/* =========================================================
                          Styling
   =========================================================*/
.app-wrap {
    background-image: var(--grad-site);
    min-height: 100%;
}

/* =========================================================
                          Layout
   =========================================================*/
</style>
