<template>
    <div class="container">
        <img :src="image" />
        <input @change="handleImage" type="file" accept="image/*" />
    </div>
</template>

<script>
export default {
    data() {
        return {
            image: "",
        };
    },
    methods: {
        // funkcia na prekonvertovanie image na base64 string
        // https://medium.com/js-dojo/how-to-upload-base64-images-in-vue-nodejs-4e89635daebc, stackoverflow, fajsiex
        // FileReader: https://developer.mozilla.org/en-US/docs/Web/API/FileReader
        // FileReader.readAsDataURL(): https://developer.mozilla.org/en-US/docs/Web/API/FileReader/readAsDataURL
        async handleImage(e) {
            const file = e.target.files[0];
            console.log(file);

            const reader = new FileReader();
            const b64Promise = new Promise((res) => {
                reader.onloadend = () => {
                    res(reader.result);
                };
            });

            reader.readAsDataURL(file);
            const b64file = await b64Promise;
            console.log(b64file);
        },
    },
};
</script>

<style></style>