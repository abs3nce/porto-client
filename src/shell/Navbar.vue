<template>
    <div class="navbar-wrap">
        <ul class="nav-list">
            <li class="nav-list-item">
                <router-link class="nav-link" to="/pf">
                    <span> <i class="fas fa-plus-circle"> </i> </span>
                </router-link>
            </li>
            <li class="nav-list-item">
                <router-link class="nav-link" to="/pf">
                    <span><i class="fas fa-search"></i></span>
                </router-link>
            </li>
            <li class="nav-list-item">
                <router-link class="nav-link" to="/pf">
                    <span>
                        <i class="fas fa-images main"></i>
                    </span>
                </router-link>
            </li>
            <li class="nav-list-item">
                <router-link class="nav-link" to="/pf">
                    <span><i class="fas fa-cog"></i></span>
                </router-link>
            </li>
            <li class="nav-list-item">
                <router-link class="nav-link" to="/pf">
                    <span><i class="fas fa-user-alt"></i></span>
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
    min-height: 96px;
    width: 100%;

    display: flex;

    background-color: var(--bg-1);
    .nav-list {
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
                @media (min-width: 320px) {
                    i {
                        font-size: 32px;
                        color: var(--acc-2);
                        transition: var(--transition-speed) ease;
                    }
                    .main {
                        font-size: 48px;
                    }
                }
                @media (min-width: 768px) {
                    i {
                        font-size: 48px;
                        color: var(--acc-2);
                        transition: var(--transition-speed) ease;
                    }
                    .main {
                        font-size: 64px;
                    }
                }
                // i {
                //     font-size: 48px;
                //     color: var(--acc-2);
                //     transition: var(--transition-speed) ease;
                // }

                i:hover {
                    color: var(--acc-4);
                }
                // .main {
                //     font-size: 64px;
                // }
            }
        }
    }
}
</style>
