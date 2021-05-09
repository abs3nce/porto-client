<template>
    <div class="user-search-wrapper">
        <input type="text" v-model="input" />
        <button @click="findUser()">
            <i class="fas fa-search"></i>
        </button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            input: undefined,
        };
    },
    methods: {
        findUser() {
            this.axios.get("http://localhost:3000/users/" + this.input).then(
                (res) => {
                    console.log("USER SEARCH SUCCESS:\n\n", res.data);
                    this.$emit("userFound", res.data);
                },
                (err) => {
                    console.log("USER SEARCH ERROR:\n", err.response);
                    this.$emit("userNotFound", err.response);
                }
            );
        },
    },
};
</script>

<style lang ="scss" scoped>
.user-search-wrapper {
    display: flex;
    justify-content: center;
    width: 100%;
    input {
        background: none;
        border: none;
        border-bottom: 1px solid white;

        color: white;
        font-size: var(--text-medium);
    }

    input:focus {
        outline: none;
    }

    input::placeholder {
        /* Chrome, Firefox, Opera, Safari 10.1+ */
        color: lightgrey;
        opacity: 1; /* Firefox */
    }

    button {
        padding: 1%;

        font-size: var(--text-medium);
        color: var(--icon-dark-cyan);

        border: none;
        border-radius: 64px;
        background-color: var(--icon-cyan);
    }
}
</style>