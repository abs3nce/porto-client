<template>
    <div class="explore-wrap">
        <UserList />
    </div>
</template>

<script>
import UserList from "../components/UserList";

export default {
    components: {
        UserList,
    },
};
</script>

<style lang="scss" scoped>
.explore-wrap {
    min-width: 100%;
    height: calc(100vh - var(--navbar-height));

    display: flex;
    justify-content: center;
    align-content: center;
    color: white;
    font-size: var(--text-large);
}
</style>
