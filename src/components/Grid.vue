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
                this.fetch = res.data.slice(0, 21);
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
    width: var(--site-height);
    min-height: calc(var(--site-height) / 3);

    display: flex;
    flex-wrap: wrap;
    @media (min-width: 100px) {
        img {
            max-width: calc(100vw / 3);
            height: calc(100vw / 3);
        }
    }

    @media (min-width: 1366px) {
        img {
            max-width: calc(var(--site-height) / 3);
            height: auto;
        }
    }

    //jediny edge case kedy to nefungovalo takze osetrenie cez kombinaciu querin
    @media (min-width: 545px) and (max-width: 1366px) and (max-height: 640px) {
        img {
            max-width: calc(var(--site-height) / 3);
            height: auto;
        }
    }
}
</style>
