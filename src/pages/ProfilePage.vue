<template>
    <div class="profile-wrap">


        <div class="error" v-if="error">
            <h1>
                {{ error }}. <br />
                Maybe try to use a different username?
                <!-- sem este pridat search bar na userov aby si uzivatel mohol vyhladat usera este raz  -->
            </h1>
        </div>


        <div class="profile" v-if="!error">
            <div class="profile-avatar">
                <img src="../assets/img/logo_small.png" alt="" srcset="" />
                <h1>{{ userData.username }}</h1>
                <!-- tu pojde samozrejme pojde obrazok ktory si uzivatel (nejako) nastavi -->
            </div>

            <div class="profile-info">
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
                    distinctio suscipit vero facere molestias ipsa inventore,
                    rerum tenetur dolores odio fuga. Sint reprehenderit quos
                    voluptatibus quisquam magni minima! Veritatis, quaerat!
                </p>
                <router-link :to="'/' + username">
                    <Button buttonLabel="View Portfolio" />
                </router-link>
                <br />
            </div>
        </div>
    </div>
</template>

<script>
import Button from "../components/Button";

export default {
    components: { Button },

    data() {
        return {
            username: this.$route.params.username,
            error: null,
            userData: {},
        };
    },
    created() {
        this.axios.get(`http://localhost:3000/users/${this.username}`).then(
            (res) => {
                console.log("PROFILE SUCCESS:\n\n", res);
                this.userData = res.data.userData;
            },
            (err) => {
                console.log("PROFILE ERROR:\n", err.response);
                this.error = err.response.data.title;
            }
        );
    },
};
</script>

<style lang="scss" scoped>
.profile-wrap {
    min-width: 100%;
    height: calc(100vh - var(--navbar-height));

    display: flex;
    flex-direction: column;
    align-content: center;

    .error {
        display: flex;
        justify-content: center;
        text-align: center;
        h1 {
            color: var(--text-white);
        }
    }

    .profile {
        height: inherit;
        display: flex;
        justify-content: space-evenly;
        color: var(--text-white);

        .profile-avatar {
            width: 25%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            text-align: center;
        }
        .profile-info {
            width: 40%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            text-align: left;
            font-size: var(--text-medium);
        }
    }
}
</style>
