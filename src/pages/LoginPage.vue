<template>
    <div class="login-wrap">
        <div class="form">
            <input
                type="text"
                v-model="login_username"
                placeholder="Your username"
            />
            <br />

            <input
                type="password"
                v-model="login_password"
                placeholder="Your password"
            /><br />

            <Button buttonLabel="Sign me in!" @buttonPressed="loginUser()"/>

            <br />

            <div class="error-message">
                {{ login_error }}
            </div>
            <router-link to="/register">
                <Button buttonLabel="I don't have an account" />
            </router-link>

            <br />

            <Button buttonLabel="Logout" @buttonPressed="logout()" />
        </div>
    </div>
</template>

<script>
import Button from "../components/Button.vue";

export default {
    components: {
        Button,
    },

    data() {
        return {
            login_username: "",
            login_password: "",
            login_error: null,
        };
    },

    methods: {
        loginUser() {
            let user = {
                username: this.login_username,
                password: this.login_password,
            };
            console.log("CLIENT LOGIN INPUT:\n\n", user);

            this.axios.post("http://localhost:3000/login", user).then(
                (res) => {
                    console.log("LOGIN SUCCESS:\n\n", res.data);
                    this.login_error = null;
                    localStorage.setItem("token", res.data.userData.token);
                    this.$router.push(`/${res.data.userData.username}`);
                },
                (err) => {
                    console.log("LOGIN ERROR:\n", err.response);
                    this.login_error = err.response.data.error;
                }
            );

            this.login_username = "";
            this.login_password = "";
        },

        logout() {
            if (localStorage.getItem("token") != null) {
                localStorage.clear();
                console.log("User logged out");
            } else {
                console.log("Nobody logged in");
            }
        },
    },
};
</script>

<style lang="scss" scoped>
.login-wrap {
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

        .error-message {
            text-align: center;
        }

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
    }
}
</style>
