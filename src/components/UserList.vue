<template>
    <div class="user-list-wrap">
        <table>
            <tr v-for="user in users" :key="user._id">
                <td>{{ user.username }}</td>
                <td>
                    <router-link :to="'/' + user.username">
                        <button>
                            View Portfolio
                        </button>
                    </router-link>
                </td>
                <td>
                    <router-link :to="'/' + user.username + '/profile'">
                        <button>
                            View Profile
                        </button>
                    </router-link>
                </td>
            </tr>
        </table>
    </div>
</template>

<script>
export default {
    data() {
        return {
            users: undefined,
        };
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
.user-list-wrap {
    table {
        tr {
            td {
                button {
                    font-size: var(--text-medium);
                    border: none;
                    border-radius: 64px;
                    background-color: var(--acc-cyan);
                    color: var(--acc-deep-blue);
                }
            }
        }
    }
}
</style>
