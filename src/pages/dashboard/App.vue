<template lang="pug">
div#app
    dashboard-root
</template>

<script>
import DashboardRoot from "./Root.vue";
import mixins from "../mixins/mixins.default.js";
export default {
    name: 'app',
    mixins: [mixins],
    components: {
        DashboardRoot
    }
}
</script>

<style lang="scss" scoped>
body, html {
    width: 100%;
    height: 100%;
    position: absolute;
}
#app{
    width:100%;
    height: 100%;
}
</style>