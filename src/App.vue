<template>
    <div class="app-wrap">
        <Navbar />
        <router-view></router-view>
    </div>
</template>

<script>
import Navbar from "./shell/Navbar.vue";
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
    --text-primary: #1b1b1b;
    --text-secondary: #646464;

    --acc-1: #6370e7;
    --acc-2: #8d72e6;
    --acc-3: #b875e6;
    --acc-4: #e479e6;

    --bg-1: #250a3f;
    --bg-2: #38515b;
    --transition-speed: 250ms;
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
    background-color: var(--accent-primary);
}

/* =========================================================
                          Styling
   =========================================================*/
.app-wrap {
    // background-color: var(--bg-primary);
    background-image: linear-gradient(to right top, var(--acc-1), var(--acc-4));
}

/* =========================================================
                          Layout
   =========================================================*/
</style>
