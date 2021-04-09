<template>
    <div class="navbar-wrap">
        <ul class="nav-list">
            <li class="nav-list-item">
                <router-link class="nav-link" to="/explore">
                    <span><i class="fas fa-search"></i></span>
                </router-link>
            </li>
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
export default {};
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
                @media (min-width: 280px) {
                    i {
                        font-size: 32px;
                        color: var(--acc-cyan);
                        transition: var(--transition-speed) ease;
                    }
                    .main {
                        font-size: 48px;
                    }
                }
                @media (min-width: 768px) {
                    i {
                        font-size: 250%; //povodne 48px
                        color: var(--acc-cyan);
                        transition: var(--transition-speed) ease;
                    }
                    .main {
                        font-size: 450%; //povodne 64px
                    }
                }

                i:hover {
                    color: var(--acc-hover);
                }
            }
        }
    }
}
</style>
