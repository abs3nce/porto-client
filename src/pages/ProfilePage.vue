<template>
    <div class="profile-wrap">
        <div class="error" v-if="error">
            <h1>
                {{ error }} <br />
                maybe try to use a different username?
                <!-- sem este pridat search bar na userov aby si uzivatel mohol vyhladat usera este raz  -->
            </h1>
        </div>

        <div class="profile" v-if="!error">
            <div class="profile-picture">
                <img src="../assets/img/logo_small.png" alt="" srcset="" />
                <!-- tu pojde samozrejme pojde obrazok ktory si uzivatel (nejako) nastavi -->
            </div>

            <div class="profile-text">
                <h1>{{ userData.username }}</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
                    distinctio suscipit vero facere molestias ipsa inventore,
                    rerum tenetur dolores odio fuga. Sint reprehenderit quos
                    voluptatibus quisquam magni minima! Veritatis, quaerat!
                </p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
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
                console.log(res);
                this.userData = res.data.userData;
            },
            (err) => {
                console.log(err.response);
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
    justify-content: center;
    align-content: center;

    .error {
        display: flex;
        justify-content: center;
        text-align: center;
    }

    .profile {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-content: center;

        .profile-picture {
            display: flex;
            justify-content: center;
        }

        .profile-text {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-content: center;
            width: 50%;

            margin: auto;
            text-align: center;
        }
    }
}
</style>
