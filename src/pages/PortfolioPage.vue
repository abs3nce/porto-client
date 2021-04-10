<template>
    <div class="portfolio-wrap">
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
