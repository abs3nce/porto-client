<template>
    <div class="portfolio-wrap">
        <!-- mozno raz pridat aj nejaky profile overview (profile picture a meno profilu) -->
        <!-- prezatial bude asi iba staci pokial tam bude grid -->
        <Grid />
    </div>
</template>

<script>
import Grid from "../components/Grid";
export default {
    props: {},
    components: {
        Grid,
    },
};
</script>

<style lang="scss" scoped>
.portfolio-wrap {
    min-width: 100%;

    display: flex;
    justify-content: center;
}
</style>
