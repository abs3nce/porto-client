<template>
    <div class="grid-wrap">
        <div class="grid">
            <!-- 6 pic cover -->
            <div class="grid-image">
                <div class="grid-image-border">
                    <img src="../assets/img/test/1.jpg" alt="" class="image" />
                </div>
            </div>
            <div class="grid-image">
                <div class="grid-image-border">
                    <img src="../assets/img/test/2.jpg" alt="" class="image" />
                </div>
            </div>
            <div class="grid-image">
                <div class="grid-image-border">
                    <img src="../assets/img/test/3.jpg" alt="" class="image" />
                </div>
            </div>
            <div class="grid-image">
                <div class="grid-image-border">
                    <img src="../assets/img/test/4.jpg" alt="" class="image" />
                </div>
            </div>
            <div class="grid-image">
                <div class="grid-image-border">
                    <img src="../assets/img/test/5.jpg" alt="" class="image" />
                </div>
            </div>
            <div class="grid-image">
                <div class="grid-image-border">
                    <img src="../assets/img/test/6.jpg" alt="" class="image" />
                </div>
            </div>

            <!-- custom aspec ratios -->
            <div class="grid-image">
                <div class="grid-image-border">
                    <img
                        src="../assets/img/test/lucka.jpg"
                        alt=""
                        class="image"
                    />
                </div>
            </div>

            <div class="grid-image">
                <div class="grid-image-border">
                    <img
                        src="../assets/img/test/auta.jpg"
                        alt=""
                        class="image"
                    />
                </div>
            </div>

            <div class="grid-image">
                <div class="grid-image-border">
                    <img
                        src="../assets/img/test/cecky.png"
                        alt=""
                        class="image"
                    />
                </div>
            </div>

            <!-- 1:1 -->
            <div class="grid-image" v-for="image in images" :key="image.id">
                <div class="grid-image-border">
                    <img :src="image.url" alt="" class="image" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    created() {
        this.axios
            .get("https://jsonplaceholder.typicode.com/photos")
            .then((res) => {
                // console.log(res.data.slice(0, 18));
                this.images = res.data.slice(0, 6);
                // console.log(this.images);
            });
    },

    methods: {},
    data() {
        return {
            images: undefined,
        };
    },
};
</script>

<style lang="scss" scoped>
.grid-wrap {
    min-width: 100%;

    display: flex;
    justify-content: center;
    .grid {
        width: var(--site-height);

        display: flex;
        flex-wrap: wrap;
        justify-content: center;

        .grid-image {
            aspect-ratio: 1/1;
            width: 33.33%;
            height: auto;

            display: flex;
            justify-content: center;
            align-content: center;

            .grid-image-border {
                aspect-ratio: 1/1;
                width: 100%;
                height: auto;

                display: flex;
                justify-content: center;
                align-content: center;

                background-color: white;

                .image {
                    width: 100%;
                    height: 100%;

                    object-fit: contain;
                }
            }
        }
    }
}
</style>
