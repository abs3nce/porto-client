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
@import url("https://fonts.googleapis.com/css2?family=Spartan&display=swap");

/* =========================================================
                            GLOBAL
   =========================================================*/
:root {
    //globalne variables pre farby

    //accents
    --acc-cyan: #00c2ff;
    --acc-hover: #00ffea;
    --acc-white: white;
    --acc-deep-blue: #00072f;
    --acc-purple: #8000ff;

    //gradients
    --grad-site: linear-gradient(0, var(--acc-purple), var(--acc-deep-blue));

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
    background-color: var(--acc-cyan);
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
