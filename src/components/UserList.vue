<template>
    <div class="search-list-wrapper">
        <br />
        <UserSearch @userFound="userFound" @userNotFound="userNotFound" />
        <br />
        <div v-if="error" class="error">
            <h1>
                {{ error.title }}. <br />
                Maybe try to use a different username?
            </h1>
        </div>
        <div class="user-list-wrap" v-if="!error">
            <table>
                <tr v-for="user in users" :key="user._id">
                    <td>{{ user.username }}</td>
                    <td>
                        <router-link :to="'/' + user.username">
                            <Button buttonLabel="View Portfolio" />
                        </router-link>
                    </td>
                    <td>
                        <router-link :to="'/' + user.username + '/profile'">
                            <Button buttonLabel="View Profile" />
                        </router-link>
                    </td>
                </tr>
            </table>
        </div>
    </div>
</template>

<script>
import Button from "../components/Button";
import UserSearch from "../components/UserSearch";

export default {
    components: {
        Button,
        UserSearch,
    },
    props: {
        user: {
            type: Object,
        },
    },
    data() {
        return {
            users: undefined,
            error: null,
        };
    },
    methods: {
        userFound(user) {
            delete user.title;
            this.users = user;
            this.error = null;
        },
        userNotFound(err) {
            console.log(err.data);
            this.error = err.data;
        },
    },
    created() {
        this.axios.get("http://localhost:3000/users").then(
            (res) => {
                console.log("EXPLORE SUCCESS:\n\n", res);
                this.users = res.data;
            },
            (err) => {
                console.log("EXPLORE ERROR:\n", err.response);
            }
        );
    },
};
</script>

<style lang="scss" scoped>
.error {
    display: flex;
    justify-content: center;
    text-align: center;
    h1 {
        color: var(--text-white);
    }
}
.user-list-wrap {
    width: 100%;
    display: flex;
    justify-content: center;
    table {
        width: 90%;
        tr {
            td {
            }
        }
    }
}
</style>
