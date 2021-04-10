<template>
    <div class="grid-wrap">
        <div class="error" v-if="error">
            <h1>
                {{ error.title }} <br />
                maybe try to use a different username?
                <!-- sem este pridat search bar na userov aby si uzivatel mohol vyhladat usera este raz  -->
            </h1>
        </div>

        <div class="grid" v-if="!error">
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
    data() {
        return {
            username: this.$route.params.username, // user je parameter z url ktory nasledne pouzivam na urobenie requestu
            error: null, //error, ktory ukladam pokial sa user nenasiel alebo nastala nejaka ina chyba
            userData: null,
            images: undefined, // toto su data ktore dostavam z requestu o fotky na jsonplaceholder (temporary)
        };
    },

    created() {
        // pri vytvoreni "renderu" sa urobi request s menom usera z urlky a podla odpovede vypisujem data hore v template
        // inak je tu iba jednoduchy handling dat
        this.axios.get(`http://localhost:3000/users/${this.username}`).then(
            (res) => {
                console.log("GRID SUCCESS:\n\n", res.data);
                this.userData = res.data;
            },
            (err) => {
                console.log("GRID ERROR:\n", err.response);
                this.error = err.response.data;
            }
        );

        // iba temporary request na ziskanie placeholder fotiek na portfolio, neskor to bude samozrejme vsetko v requeste na usera vyssie
        this.axios
            .get("https://jsonplaceholder.typicode.com/photos")
            .then((res) => {
                // console.log(res.data.slice(0, 18));
                this.images = res.data.slice(0, 6);
                // console.log(this.images);
            });
    },
};
</script>

<style lang="scss" scoped>
.grid-wrap {
    min-width: 100%;

    display: flex;
    justify-content: center;

    .error {
        height: calc(100vh - var(--navbar-height));

        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
    }

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
