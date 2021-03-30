<template>
    <div class="join-wrap">
        <div class="login">
            <input type="text" v-model="login_username" />
            <input type="password" v-model="login_password" /><br />
            <button @click="loginUser()">Sign me in!</button>
            <br />
            <p>{{ login_error }}</p>
        </div>
        <div class="register">
            <input type="text" v-model="register_username" />
            <input type="email" v-model="register_email" />
            <input type="password" v-model="register_password" /><br />
            <button @click="registerUser()">Register me!</button>
            <br />
            <p>{{ register_error }}</p>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        loginUser() {
            let user = {
                username: this.login_username,
                password: this.login_password,
            };
            console.log(user);

            this.axios.post("http://localhost:3000/login", user).then(
                (res) => {
                    console.log(res);
                    this.login_error = null;
                    localStorage.setItem("token", res.data.token);
                    this.$router.push("/portfolio");
                },
                (err) => {
                    console.log(err.response);
                    this.login_error = err.response.data.title;
                }
            );

            this.login_username = "";
            this.login_password = "";
        },

        registerUser() {
            let newUser = {
                username: this.register_username,
                email: this.register_email,
                password: this.register_password,
            };
            console.log(newUser);

            this.axios.post("http://localhost:3000/register", newUser).then(
                (res) => {
                    console.log(res);
                    this.register_error = null;
                },
                (err) => {
                    console.log(err.response);
                    this.register_error = err.response.data.title;
                }
            );
            this.register_username = "";
            this.register_password = "";
            this.register_email = "";
        },
    },
    data() {
        return {
            login_username: "",
            login_password: "",

            register_username: "",
            register_email: "",
            register_password: "",

            register_error: null,
            login_error: null,
        };
    },
};
</script>

<style lang="scss" scoped>
.join-wrap {
    min-width: 100%;
    height: calc(100vh - var(--navbar-height));

    display: flex;
    justify-content: space-evenly;
    .login {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-content: center;
        input {
        }
    }
    .register {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-content: center;
    }
}
</style>
