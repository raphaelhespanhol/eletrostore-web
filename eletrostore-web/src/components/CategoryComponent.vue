<template>
    <div>
        <HomeApp></HomeApp>
        <ListCategoryComponent></ListCategoryComponent>
    </div>
</template>

<script>
import HomeApp from "./HomeApp";
import ListCategoryComponent from "./ListCategoryComponent";
export default {
    name: "CategoryComponent",
    components: {
        HomeApp,
        ListCategoryComponent
    }
};
</script>

<style scoped>
</style>