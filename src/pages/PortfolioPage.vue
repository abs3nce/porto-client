<template>
    <div class="portfolio-wrap">
        <!-- mozno raz pridat aj nejaky profile overview (profile picture a meno profilu) -->
        <!-- prezatial bude asi iba staci pokial tam bude grid -->

        <!-- <div class="image" v-for="i in 18" :key="i"></div> -->
        <Grid />
    </div>
</template>

<script>
import Grid from "../components/Grid";
export default {
    components: {
        Grid,
    },
};
</script>

<style lang="scss" scoped>
.portfolio-wrap {
    min-height: var(--site-height);
    min-width: 100%;

    display: flex;
    justify-content: center;

    // background: yellow;
    // .grid-wrap {
    //     height: inherit;
    //     width: var(--site-height);
    //     display: flex;
    //     flex-wrap: wrap;

    //     // background: olive;

    //     @media (min-width: 280px) {
    //         .image {
    //             aspect-ratio: 1/1;
    //             width: 33.33%;
    //             height: auto;
    //             background-color: orange;
    //         }
    //         .image:nth-child(2n) {
    //             aspect-ratio: 1/1;
    //             width: 33.33%;
    //             height: auto;
    //             background-color: brown;
    //         }
    //     }
    //     @media (min-width: 1025px) {
    //         .image {
    //             background-color: orange;
    //             aspect-ratio: 1/1;
    //             height: calc(var(--site-height) / 3);
    //             width: auto;
    //         }
    //         .image:nth-child(2n) {
    //             background-color: brown;
    //             aspect-ratio: 1/1;
    //             height: calc(var(--site-height) / 3);
    //             width: auto;
    //         }
    //     }
    // }
}
</style>
