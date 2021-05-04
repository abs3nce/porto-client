<template>
    <div class="register-wrap">
        <div class="form">
            <input
                type="text"
                v-model="register_username"
                placeholder="Your username"
            />
            
            <br />
            <input
                type="password"
                v-model="register_password"
                placeholder="Your password"
            /><br />
            <button @click="registerUser()">Register me!</button>
            <br />
            <p>{{ register_error }}</p>

            <router-link to="/login">
                <button>I already have an account</button>
            </router-link>
        </div>
        <!-- pridat logout button ako button component s propomi logout buttonu -->
    </div>
</template>

<script>
export default {
    data() {
        return {
            register_username: "",
            register_password: "",
            register_error: null,
        };
    },
    methods: {
        registerUser() {
            let newUser = {
                username: this.register_username,
                password: this.register_password,
            };
            console.log(newUser);

            this.axios.post("http://localhost:3000/register", newUser).then(
                (res) => {
                    console.log(res);
                    this.register_error = null;
                    this.$router.push("/login");
                },
                (err) => {
                    console.log(err.response);
                    this.register_error = err.response.data.title;
                }
            );
            this.register_username = "";
            this.register_password = "";
        },
    },
};
</script>

<style lang="scss" scoped>
.register-wrap {
    min-width: 100%;
    height: calc(100vh - var(--navbar-height));

    display: flex;
    justify-content: center;
    align-content: center;
    .form {
        width: 33%;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-content: center;

        input {
            background: none;
            border: none;
            border-bottom: 1px solid white;
            padding: 3%;
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

        p {
            text-align: center;
        }

        button {
            width: 100%;
            padding: 3%;

            font-size: var(--text-medium);

            border: none;
            border-radius: 64px;
            background-color: var(--acc-cyan);
            color: var(--acc-deep-blue);
        }
    }
}
</style>
