<template>
    <div class="grid-wrap">
        <img :src="image.url" alt="" v-for="image in fetch" :key="image.id" />
    </div>
</template>

<script>
export default {
    mounted() {
        this.axios
            .get("https://jsonplaceholder.typicode.com/photos")
            .then((res) => {
                // console.log(res.data.slice(0, 18));
                this.fetch = res.data.slice(0, 30);
            });
    },

    methods: {},
    data() {
        return {
            fetch: undefined,
        };
    },
};
</script>

<style lang="scss" scoped>
.grid-wrap {
    height: inherit;
    width: var(--site-height);
    display: flex;
    flex-wrap: wrap;

    // background: olive;

    @media (min-width: 180px) {
        img {
            aspect-ratio: 1/1;
            width: 33.33%;
            height: auto;
            // background-color: orange;
        }
    }
    @media (min-width: 1025px) {
        img {
            // background-color: orange;
            aspect-ratio: 1/1;
            height: calc(var(--site-height) / 3);
            width: auto;
        }
    }
}
</style>
