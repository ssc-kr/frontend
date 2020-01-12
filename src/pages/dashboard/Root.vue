<template lang="pug">
div.dashboard-root
    dashboard-header
    dashboard
    global-abs-components
</template>

<script>
import Dashboard from "../../views/dashboard/dashboard.vue";
import DashboardHeader from "../../views/header/header.vue";
import GlobalAbsComponents from "../../views/global/global-abs-components.vue";
export default {
    name: 'dashboard-root',
    components: {
        DashboardHeader,
        Dashboard,
        GlobalAbsComponents
    }
}
</script>

<style lang="scss" scoped>
.dashboard-root {
    width: 100%;
    height: 100%;
    position: absolute;
    overflow: hidden;
    // min-width: 1440px;
    // min-height: 768px;
}
</style>