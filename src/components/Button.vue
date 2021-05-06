<template>
    <button @click="click()">{{ buttonLabel }}</button>
</template>

<script>
export default {
    // https://codeburst.io/creating-reusable-components-with-vue-js-button-component-503167facfde
    props: {
        buttonLabel: {
            type: String,
            required: true,
        },
        // buttonFunction: {
        //     type: Function,
        // }
    },
    methods: {
        click() {
            this.$emit("buttonPressed");
        }

    }
};
</script>

<style lang="scss" scoped>
button {
    width: 100%;
    padding: 3%;

    font-size: var(--text-medium);

    border: none;
    border-radius: 64px;
    background-color: var(--acc-cyan);
    color: var(--acc-deep-blue);
}
</style>