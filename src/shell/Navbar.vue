<template>
    <div class="navbar-wrap">
        <ul class="nav-list">
            <li class="nav-list-item">
                <router-link class="nav-link" to="/explore">
                    <span><i class="fas fa-search"></i></span>
                </router-link>
            </li>
            <li class="nav-list-item">
                <div class="nav-link">
                    <span>
                        <button @click="isUserLogged('profile')">
                            <i class="fas fa-user-circle"></i>
                        </button>
                    </span>
                </div>
            </li>
            <li class="nav-list-item">
                <div class="nav-link">
                    <span>
                        <button @click="isUserLogged('portfolio')">
                            <i class="fas fa-images main"></i>
                        </button>
                    </span>
                </div>
            </li>

            <!-- 
            <li class="nav-list-item">
                <router-link class="nav-link" to="/profile">
                    <span><i class="fas fa-user-circle"></i></span>
                </router-link>
            </li>

            <li class="nav-list-item">
                <router-link class="nav-link" to="/portfolio">
                    <span>
                        <i class="fas fa-images main"></i>
                    </span>
                </router-link>
            </li> 
            
            backup povodneho router linku 
            
            -->
            <li class="nav-list-item">
                <router-link class="nav-link" to="/post">
                    <span> <i class="fas fa-plus-circle"> </i> </span>
                </router-link>
            </li>
            <!-- tieto posledne dve sa budu switchovat podla toho ci je user loginnuty -->
            <!-- <li class="nav-list-item">
                <router-link class="nav-link" to="/profile">
                    <span><i class="fas fa-user-alt"></i></span>
                </router-link>
            </li> -->
            <li class="nav-list-item">
                <router-link class="nav-link" to="/login">
                    <span><i class="fas fa-sign-in-alt"></i></span>
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            userData: null,
            userSigned: false,
        };
    },
    methods: {
        isUserLogged(direction) {
            if (localStorage.getItem("token") == null) {
                this.$router.push("/login");
            } else {
                this.whoIsUser(direction);
            }
        },
        whoIsUser(direction) {
            this.axios
                .get("http://localhost:3000/verifylogin", {
                    headers: { token: localStorage.getItem("token") },
                })
                .then(
                    (res) => {
                        console.log(
                            "NAVBAR SUCCESS (user logged in verification):\n\n",
                            res
                        );
                        this.userData = res.data.userData;
                        if (direction == "portfolio") {
                            this.$router.replace(`/${this.userData.username}`);
                        } else {
                            this.$router.replace(
                                `/${this.userData.username}/profile`
                            );
                        }
                    },
                    (err) => {
                        console.log("NAVBAR ERROR:\n", err.response);
                        this.$router.replace("/login");
                    }
                );
        },
    },
};
</script>

<style lang="scss" scoped>
.navbar-wrap {
    height: var(--navbar-height);
    width: 100%;

    display: flex;
    // background-color: var(--acc-deep-blue);
    .nav-list {
        padding: 0;
        margin: 0;

        width: 100%;
        display: flex;
        justify-content: space-evenly;
        align-items: center;

        list-style: none;
        .nav-list-item {
            height: 100%;
            display: flex;
            align-items: center;
            .nav-link {
                button {
                    background: none;
                    border: none;
                }
                button:focus {
                    outline: none;
                }
                @media (min-width: 280px) {
                    i {
                        font-size: 32px;
                        color: var(--icon-cyan);
                        transition: var(--transition-speed) ease;
                    }
                    .main {
                        font-size: 48px;
                    }
                }
                @media (min-width: 950px) {
                    i {
                        font-size: 250%; //povodne 48px
                        color: var(--icon-cyan);
                        transition: var(--transition-speed) ease;
                    }
                    .main {
                        font-size: 64px; //povodne 64px // 450%??
                    }
                }

                i:hover {
                    color: var(--icon-hover);
                }
            }
        }
    }
}
</style>
