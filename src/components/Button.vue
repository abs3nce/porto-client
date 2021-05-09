<template>
    <button @click="click()">{{ buttonLabel }}</button>
</template>

<script>
export default {
    props: {
        buttonLabel: {
            type: String,
            required: true,
        },
    },
    methods: {
        click() {
            this.$emit("buttonPressed");
        },
    },
};
</script>

<style lang="scss" scoped>
button {
    width: 100%;
    padding: 3%;

    font-size: var(--text-medium);
    color: var(--icon-dark-cyan);

    border: none;
    border-radius: 64px;
    background-color: var(--icon-cyan);
    // color: var(--acc-deep-blue);
}
</style>