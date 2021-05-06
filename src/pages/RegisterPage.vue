<template>
    <div class="register-wrap">
        <div class="form">
            <input
                type="text"
                v-model="register_username"
                placeholder="Your username"
            /><br />
            <input
                type="password"
                v-model="register_password"
                placeholder="Your password"
            /><br />
            <Button buttonLabel="Register me!"/>
            <br />
            <div class="error-message">{{ register_error }}</div>

            <router-link to="/login">
                <Button buttonLabel="I already have an account" />
            </router-link>
            <br />
            <Button buttonLabel="Logout"/>
        </div>
        <!-- pridat logout button ako button component s propomi logout buttonu -->
    </div>
</template>

<script>
import Button from "../components/Button";

export default {
    components: { Button },
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

        Logout() {
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

        .error-message {
            text-align: center;
        }
    }
}
</style>
